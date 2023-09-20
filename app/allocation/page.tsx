import { StrictMode } from 'react';
import Allocation from "../components/allocation/Allocation";

const AllocationPage     = () => {
  return (
      <div>
      <StrictMode>
        
          <Allocation sectionid={1} slotid={1} />
    
      </StrictMode>
    </div>
  )
}

export default AllocationPage   
