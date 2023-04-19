import { query } from "./db";

export async function getCourses(){
    try {
        const result = await query(`SELECT * FROM Courses;`);
        return result.rows;
    } catch (error){
        console.error(error);
        return null;
    }
}
