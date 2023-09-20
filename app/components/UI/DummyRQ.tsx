"use client"
import { Course } from '@/app/types';
import { useQuery } from '@tanstack/react-query';
import DynamicDropdown from './DynamicDropDown';

const DummyRQ = () => {

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

    /* value: string;
    text: string;
} */
    const crs = [
        { value: "1", text: "One" },
        { value: "2", text: "Two" },
        { value: "3", text: "Three" },
        { value: "4", text: "Four" },
] 

    return (
        <>
            <h1> Dynamic Drop Down</h1>
            <DynamicDropdown options={crs} />  
                
        </>

    )
}

export default DummyRQ