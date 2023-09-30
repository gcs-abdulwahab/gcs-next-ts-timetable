import React from "react";
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

const AllocationTable = ({ slots, sections }: AllocationTableProps) => {
	const semesters = [
		{ id: 1, name: "2nd Semester", isMorning: "Morning" },
		{ id: 2, name: "4th Semester", isMorning: "Morning" },
		{ id: 3, name: "6th Semester", isMorning: "Morning" },
		{ id: 4, name: "8th Semester", isMorning: "Morning" },
		{ id: 5, name: "2nd Semester", isMorning: "Evening" },
		{ id: 6, name: "4th Semester", isMorning: "Evening" },
		{ id: 7, name: "6th Semester", isMorning: "Evening" },
		{ id: 8, name: "8th Semester", isMorning: "Evening" },
	];

	return (
		<React.Fragment>
			<div className="bg-red-400 p-4">
				<ul className="flex ">
					<li className="bg-red-400 mx-2 p-3">
						{" "}
						<button className="btn btn-primary ">BS Morning </button>{" "}
					</li>
					<li className="bg-red-400 mx-2 p-3">
						{" "}
						<button className="btn btn-accent">Inter Morning</button>{" "}
					</li>
					<li className="bg-red-400 mx-2 p-3">
						{" "}
						<button className="btn btn-accent">BS Evening </button>{" "}
					</li>
					<li className="bg-red-400 mx-2 p-3">
						{" "}
						<button className="btn btn-accent">Inter Evening</button>{" "}
					</li>
					<li className="bg-red-400 mx-2 p-3">
						{" "}
						<button className="btn btn-accent">ADP Morning </button>{" "}
					</li>
				</ul>
			</div>

			<div className="bg-yellow-400 p-4">
				<ul className="flex ">
					<li className=" mx-2 p-3">
						{" "}
						<button className="btn btn-primary">1st</button>{" "}
					</li>
					<li className=" mx-2 p-3">
						{" "}
						<button className="btn btn-accent">3rd</button>{" "}
					</li>
					<li className=" mx-2 p-3">
						{" "}
						<button className="btn btn-accent">5th</button>{" "}
					</li>
					<li className=" mx-2 p-3">
						{" "}
						<button className="btn btn-accent">7th</button>{" "}
					</li>
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
								<td key={colIndex} className="border border-gray-400 px-4 py-2">
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
