import { Semester } from "../types";

interface SemesterProps {
	semesters: Semester[];
}

const SemesterComponent = ({ semesters }: SemesterProps) => {
	return (
		<div className="join flex   ">

			{
			semesters.map((semester) => (
				<label key={semester.id} className="join-item btn ">
					<input
						className="join-item btn "
						type="radio"
						name="semester"
						aria-label={semester.name}
					/>
					
				</label>
				))


			}
		</div>
	);
};

export default SemesterComponent;
