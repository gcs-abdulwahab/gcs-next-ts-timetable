import { StrictMode } from 'react';
import AllocationTable from '../components/allocation/AllocationTable';
// import Allocation from "../components/allocation/Allocation";

const AllocationPage     = () => {

  const slots = [
    { id: 1, name: '8:00-9:00' },
    { id: 1, name: '8:30-9:30' },
    { id: 2, name: '9:00-10:00' },
    { id: 3, name: '10:00-11:00' },
    { id: 4, name: '11:00-12:00' },
    { id: 5, name: '12:00-1:00' },
    { id: 6, name: '1:00-2:00' },
    { id: 7, name: '2:00-3:00' },
    { id: 8, name: '2:10-2:50' },
  ];

  const sections = [
    { id: 12, name: 'Inter   First Year   ICS Physics   Section G ' },
    { id: 13, name: 'Inter   First Year   ICS Physics   Section H ' },
    { id: 14, name: 'Inter   First Year   ICS Physics   Section Q ' },
    { id: 1, name: 'Botany' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Chemistry' },
    { id: 4, name: 'BBA G1' },
    { id: 5, name: 'BBA G2' },
    { id: 6, name: 'Urdu' },
    { id: 7, name: 'Math' },
    { id: 8, name: 'Physics' },
    { id: 9, name: 'BSCS G1' },
    { id: 10, name: 'BSCS G2' },
    { id: 11, name: 'Zoology' }, 
  ];

  return (
      <div>
      <StrictMode>
        
        {/* <Allocation sectionid={1} slotid={1} /> */}

          <AllocationTable       slots={slots}     sections={sections}  />
    
      </StrictMode>
    </div>
  )
}

export default AllocationPage   
