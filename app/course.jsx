
export function Courses(){
    async function fetchCourse(){
        const course = await `
            SELECT name FROM Courses;
        `;
        return course;
    }
    
    // return (
    //     <section>
    //         <h2>{}
    //     </section>
    // )
}