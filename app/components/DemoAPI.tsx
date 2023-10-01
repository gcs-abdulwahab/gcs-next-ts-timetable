"use client"
import { HiPencilAlt } from "react-icons/hi"
const DemoAPI = () => {

    const handleClick = async () => { 
        const res = await fetch('api/slots')
        const data = await res.json()
        console.log(data)
    }

  return (
      <div>
          DEMO Check Console Log 

        <button onClick={handleClick} > Fetch slots</button>
        <HiPencilAlt />
        
    </div>
  )
}

export default DemoAPI