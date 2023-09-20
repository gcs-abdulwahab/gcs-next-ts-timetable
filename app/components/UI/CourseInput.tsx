"use client"
import { Course } from '@/app/types';
import { useQuery } from '@tanstack/react-query';

interface CourseInputProps { 
    courseID: number | null;
    setCourseID: React.Dispatch<React.SetStateAction<number | null>>;
    semesterid: number;
}


const CourseInput:React.FC<CourseInputProps>  =    (  { courseID , setCourseID , semesterid } ) => {

    

    const { isLoading, data , error } = useQuery<Course[], Error>({
        queryKey: ['courses'],
        queryFn: async () => {
            const courses = await fetch("http://gcstimetable.xyz/api/" + "courses?institutionid=2")
                .then((resp) => resp.json())

            console.log(courses)
            return courses as Course[];

        }
    })

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>An error has occurred: {error.message}</div>;

    const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // e.target.value is NAN then pass null else  parseInt and set the state
        setCourseID(isNaN(parseInt(e.target.value)) ? null : parseInt(e.target.value));
    };


    return (
        <>

            {/* Course Selection */}
            <select onChange={handleCourseChange}   className="select select-bordered w-full max-w-xs my-6" name="course">
                <option selected disabled>Select Course</option>
                {
                    data.map((course:Course) => (
                        <option key={course.id} value={course.id}>
                            {`${course.display_code} (${course.name} )`}
                        </option>
                    ))
                }
            </select>


        </>
    )
}

export default CourseInput