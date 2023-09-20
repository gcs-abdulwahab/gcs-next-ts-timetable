"use client"
import { Room } from '@/app/types';
import { useQuery } from '@tanstack/react-query';

const DummyRQ = () => {

    // import BASE_URL from the env file
    const api_url = "http://gcstimetable.xyz/api/";

    const { isLoading, error, data } = useQuery<Room[], Error>({
        queryKey: ['rooms'],
        queryFn: async () => {
            const resp = await fetch(api_url + "rooms?institutionid=2")
                .then((resp) => resp.json())
            console.log(resp)
            return resp as Room[];

        },

    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message} </div>;



    return (
        <>
        <h1> Rooms Details </h1>
        <ul>
                {
                    data?.map((item) => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>ID: {item.id}</p>
                            <p>Number: {item.code}</p>
                            <p>Code: {item.code}</p>
                        </li>
                    ))
             }
        </ul>
        </>

    )
}

export default DummyRQ