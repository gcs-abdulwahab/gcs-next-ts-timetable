"use client";
import { useQuery } from "@tanstack/react-query";

const DemoQuery = () => {
	type GitHubRepo = {
		name: string;
		description: string;
		subscribers_count: string;
		stargazers_count: string;
		forks_count: string;
    };
    
    type Day = {
        id: number;
        name: string;
        code: string;
        number: number;        
    };

    // const api_url = "https://api.github.com/repos/TanStack/query";
       const api_url = "http://gcstimetable.xyz/api/";

    

	const { isLoading, error, data } = useQuery<Day[], Error>({
		queryKey: ["dayData"],
		queryFn: () =>
			fetch(api_url+"days").then((res) =>
				res.json()
			),
	});

	if (isLoading) return "Loading...";

	if (error) return "An error has occurred: " + error.message;

	return (
        <div>
            
            {/* map data */}
            {data?.map((day) => (
                <div key={day.id}>
                    <h1>{day.name}</h1>
                    <p>{day.code}</p>
                    <strong>👀 {day.number}</strong>{" "}
                </div>
            ))}


			{/* <h1>{data.name}</h1>
			<p>{data.description}</p>
			<strong>👀 {data.subscribers_count}</strong>{" "}
			<strong>✨ {data.stargazers_count}</strong>{" "}
			<strong>🍴 {data.forks_count}</strong> */}
		</div>
	);
};

export default DemoQuery;
