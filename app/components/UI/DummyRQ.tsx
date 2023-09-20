"use client"
import { Course } from '@/app/types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import DynamicDropdown from './DynamicDropDown';

const DummyRQ = () => {


    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    // Callback function to handle the selected value change
    const handleDropdownChange = (selectedValue: number) => {
        setSelectedOption(selectedValue);
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
            <DynamicDropdown options={mappedCourses} onValueChange={handleDropdownChange} />
            <p>Selected Value: {selectedOption !== undefined ? selectedOption : 'None'}</p>
                
        </>

    )
}

export default DummyRQ