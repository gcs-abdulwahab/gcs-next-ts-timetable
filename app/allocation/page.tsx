import { StrictMode } from 'react';
import AllocationTable from '../components/allocation/AllocationTable';
// import Allocation from "../components/allocation/Allocation";

const AllocationPage     = () => {
  return (
      <div>
      <StrictMode>
        
        {/* <Allocation sectionid={1} slotid={1} /> */}

          <AllocationTable />
    
      </StrictMode>
    </div>
  )
}

export default AllocationPage   
