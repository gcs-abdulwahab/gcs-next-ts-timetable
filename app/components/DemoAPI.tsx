"use client"
const DemoAPI = () => {

    const handleClick = async () => { 
        const res = await fetch('api/slots')
        const data = await res.json()
        console.log(data)
    }

  return (
      <div>
          DEMO 

        <button onClick={handleClick} > Fetch slots</button>

        
    </div>
  )
}

export default DemoAPI