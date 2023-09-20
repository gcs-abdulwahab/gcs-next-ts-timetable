"use client"
import { Course } from '@/app/types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import DynamicDropdown from './DynamicDropDown';

const ParentInput = () => {


    const [selectedCourseOption, setselectedCourseOption] = useState<number | null>(null);
    const [selectedRoomOption, setselectedRoomOption] = useState<number | null>(null);

    // Callback function to handle the selected value change
    const handleCourseChange = (selectedValue: number) => {
        setselectedCourseOption(selectedValue);
    };

    const handleRoomChange = (selectedValue: number) => {
        setselectedRoomOption(selectedValue);
    };


    // import BASE_URL from the env file
    const api_url = "http://gcstimetable.xyz/api/";

    const { isLoading, error, data } = useQuery<Course[], Error>({
        queryKey: ['courses'],
        queryFn: async () => {
            const resp = await fetch(api_url + "courses?semesterid=2")
                .then((resp) => resp.json())
            console.log(resp)
            return resp as Course[];
        },

    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message} </div>;

    const mappedCourses = data.map(course => ({
        value: course.id,
        text: `${course.code}  ${course.name}`
    }));

    console.log(mappedCourses);

    return (
        <>
            <h1> Dynamic Drop Down</h1>
            <DynamicDropdown name="courseinput" options={mappedCourses} onValueChange={handleCourseChange} />
            <p>Selected Value: {selectedCourseOption !== undefined ? selectedCourseOption : 'None'}</p>

            <DynamicDropdown name="roominput" options={mappedCourses} onValueChange={handleRoomChange} />
            <p>Selected Value: {selectedRoomOption !== undefined ? selectedRoomOption : 'None'}</p>


        </>

    )
}

export default ParentInput