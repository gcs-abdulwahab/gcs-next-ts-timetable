import React from 'react';
interface Slot {
  id: number;
  name: string;
}
interface Section {
  id: number;
  name: string;
}

interface AllocationTableProps {
  slots: Slot[];
  sections: Section[];
}

const AllocationTable = () => {
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

  const semesters = [
    { id: 1, name: '2nd Semester', isMorning:'Morning' },
    { id: 2, name: '4th Semester', isMorning:'Morning' },
    { id: 3, name: '6th Semester', isMorning:'Morning' },
    { id: 4, name: '8th Semester', isMorning:'Morning' },
    { id: 5, name: '2nd Semester', isMorning:'Evening' },
    { id: 6, name: '4th Semester', isMorning:'Evening' },
    { id: 7, name: '6th Semester', isMorning:'Evening' },
    { id: 8, name: '8th Semester', isMorning:'Evening' },
    
  ];
  
  return (
    <React.Fragment>
      <div className="bg-yellow-400 p-4">
        <ul className="flex ">
          <li className="bg-red-400 mx-2 p-3">1st</li>
          <li className="bg-red-400 mx-2 p-3">3rd</li>
          <li className="bg-red-400 mx-2 p-3">5th</li>
          <li className="bg-red-400 mx-2 p-3">7th</li>
        </ul>
      </div>
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">--</th>
          {slots.map((slot, index) => (
            <th key={index} className="border border-gray-400 px-4 py-2">
              {slot.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sections.map((session, rowIndex) => (
          <tr key={rowIndex}>
            <td className="border border-gray-400 px-4 py-2 font-bold">
              {session.name}
            </td>
            {slots.map((slot, colIndex) => (
              <td
                key={colIndex}
                className="border border-gray-400 px-4 py-2"
              >
                {/* Data for {session.name} in {slot.name} */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      </table>
      </React.Fragment>
  );
};

export default AllocationTable;
