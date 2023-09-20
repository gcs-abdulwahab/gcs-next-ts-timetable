'use client'
import { useQuery } from "@tanstack/react-query";

export interface DayData {
  id: number;
  name: string;
  number: number;
  code: string;
}

const DemoRQ = () => {

  const api_url = "http://gcstimetable.xyz/api/";

  const { isLoading, error, data } = useQuery({
    queryKey: ['days'],
    queryFn: async() => {
      const resp = await fetch("http://gcstimetable.xyz/api/" + "days?institutionid=2")
        .then((resp) => resp.json())
      
      console.log(resp)
      return  resp as DayData[];
      
    },

  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: </div>;

  return (
    <div>
      <h1>Day Data</h1>
      <ul>
        {
          data?.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>ID: {item.id}</p>
            <p>Number: {item.number}</p>
            <p>Code: {item.code}</p>
          </li>
          ))
        
        }
      </ul>

    </div>
  );
}

export default DemoRQ