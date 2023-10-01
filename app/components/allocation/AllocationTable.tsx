import React from "react";
import SemesterComponent from "../SemesterComponent";
import Shift from "../Shift";
import Allocation from './Allocation';

interface Slot {
	id: number;
	name: string;
}

interface Semester {
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
	semesters: Semester[];
}

const AllocationTable = ({ slots, sections, semesters }: AllocationTableProps) => {

	const shifts = [
		{ id: 1, name: "BS Morning" },
		{ id: 2, name: "Inter Morning" },
		{ id: 3, name: "BS Evening" },
		{ id: 4, name: "Inter Evening" },
		{ id: 5, name: "ADP Morning" },
	];
	return (
		<React.Fragment>
			<div className="bg-red-400 p-4">
				<h1>SHIFTS:</h1>
				<Shift shifts={shifts} />
			</div>

			<div className="bg-yellow-400 p-4">
				<h1>Semesters</h1>
				<h2>for InterMorning    Semesters will be    First Year and 2nd Year</h2>
				<SemesterComponent semesters={semesters} />

				{/* TODO :  for InterMorning    Semesters will be    First Year and 2nd Year */}
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
								<td key={colIndex} className="border border-gray-400 px-4 py-2">
									{/* Data for {session.name} in {slot.name} */}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			<Allocation slotid={1} sectionid={1}  />

		</React.Fragment>
	);
};

export default AllocationTable;
