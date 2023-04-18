import pg from 'pg';
import { readFile } from 'fs';

const SCHEMA_FILE = '../sql/schema.sql';

const { DATABASE_URL: connectionString, NODE_ENV: nodeEnv = 'development' } =
  process.env;

if (!connectionString) {
  console.error('vantar DATABASE_URL í .env');
  process.exit(-1);
}

const ssl = nodeEnv === 'production' ? { rejectUnauthorized: false } : false;
const pool = new pg.Pool({ connectionString, ssl });

pool.on('error', (err) => {
    console.error('Villa í tengingu við gagnagrunn, forrit hættir', err);
    process.exit(-1);
});

export async function query(q, values = []) {
    let client;
    try {
      client = await pool.connect();
    } catch (e) {
      console.error('unable to get client from pool', e);
      return null;
    }
  
    try {
      const result = await client.query(q, values);
      return result;
    } catch (e) {
      if (nodeEnv !== 'test') {
        console.error('unable to query', e);
      }
      return null;
    } finally {
      client.release();
    }
}

export async function createSchema(schemaFile = 'schema.sql') {
    const data = await readFile(schemaFile);
    const schema = data.toString();
  
    await pool.query(schema);
}

export async function dropSchema(dropFile = DROP_SCHEMA_FILE) {
  const data = await readFile(dropFile);

  return query(data.toString('utf-8'));
}

export async function getCourses(){
    try {
        const result = await query(`SELECT * FROM Courses;`);
        return result.rows;
    } catch (error){
        console.error(error);
        return null;
    }
}

// export async function signup(){
//     const result = await query(
//         `
//           INSERT INTO users (username, password)
//           VALUES (?, ?);
//         `);
// }

export async function end() {
    await pool.end();
}