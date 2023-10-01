interface Shift {
	id: number;
	name: string;
}

interface ShiftProps {
	shifts: Shift[];
}
const Shift = ({ shifts }: ShiftProps) => {
	{
		/* <ul className="flex ">
		<li className="bg-red-400 mx-2 p-3">
			<button className="btn btn-primary ">BS Morning </button>
		</li>
		<li className="bg-red-400 mx-2 p-3">
			<button className="btn btn-accent">Inter Morning</button>
		</li>
		<li className="bg-red-400 mx-2 p-3">
			<button className="btn btn-accent">BS Evening </button>
		</li>
		<li className="bg-red-400 mx-2 p-3">
			<button className="btn btn-accent">Inter Evening</button>
		</li>
		<li className="bg-red-400 mx-2 p-3">
			<button className="btn btn-accent">ADP Morning </button>
		</li>
	</ul> */
	}
	return (
		<ul className="flex ">
			{shifts?.map((shift, index) => (
				<label key={shift.id} className="join-item btn ">
				<input
					className="join-item btn "
					type="radio"
					name="shift"
					aria-label={shift.name}
				/>
				
			</label>
			))}
		</ul>
	);
};

export default Shift;
