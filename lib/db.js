import { readFile } from "fs/promises";
import pg from "pg";

const SCHEMA_FILE = '../pages/sql/schema.sql';


const { DATABASE_URL: connectionString, NODE_ENV: nodeEnv = 'development' } =
  process.env;

if (!connectionString) {
  console.error('vantar DATABASE_URL í .env');
  process.exit(-1);
}

const ssl = nodeEnv === 'production' ? { rejectUnauthorized: false } : false;
const pool = new pg.Pool({ connectionString, ssl });

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
export async function createSchema(schemaFile = SCHEMA_FILE){
    const data = await readFile(schemaFile);

    return query(data.toString);
}

export async function end() {
    await pool.end();
}