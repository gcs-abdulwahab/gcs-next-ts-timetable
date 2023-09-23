import React from 'react';

interface Slot {
  id: number;
  name: string;
}
interface Session {
  id: number;
  name: string;
}

interface SessionTableProps {
  slots: Slot[];
  sessions: Session[];
}

const SessionTable = () => {
  const slots = [
    { id: 1, name: '8:00-9:00' },
    { id: 2, name: '9:00-10:00' },
    { id: 3, name: '10:00-11:00' },
    { id: 4, name: '11:00-12:00' },
    { id: 5, name: '12:00-1:00' },
    { id: 6, name: '1:00-2:00' },
    { id: 7, name: '2:00-3:00' },
  ];
  const sessions = [
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
  ];
  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">Days\Time</th>
          {slots.map((slot, index) => (
            <th key={index} className="border border-gray-400 px-4 py-2">
              {slot.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sessions.map((session, rowIndex) => (
          <tr key={rowIndex}>
            <td className="border border-gray-400 px-4 py-2 font-bold">
              {session.name}
            </td>
            {slots.map((slot, colIndex) => (
              <td
                key={colIndex}
                className="border border-gray-400 px-4 py-2"
              >
                Data for {session.name} in {slot.name}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SessionTable;
