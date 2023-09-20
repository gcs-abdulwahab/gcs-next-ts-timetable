'use client'
import { BASE_URL } from "@/app/config";
import { useQuery } from "@tanstack/react-query";

export interface DayData {
  id: number;
  name: string;
  number: number;
  code: string;
}

const DemoMultiRQ = () => {

  /* TODO: we have to experiment with useQueries */

  

  const { isLoading, error, data } = useQuery({
    queryKey: ['days'],
    queryFn: async() => {
      const resp = await fetch(`${BASE_URL}/days?institutionid=2`)
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

export default DemoMultiRQ