"use client";
import { Semester } from "@/app/types";
import { Tab } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";

function Tabs() {
	const { isLoading, error, data } = useQuery({
		queryKey: ["semesters"],
		queryFn: async () => {
			const response = await fetch(
				`http://gcstimetable.xyz/api/semesters?program_id=1`
			).then((resp) => resp.json());

			console.log(response);
			return response as Semester[];
		},
	});

	return (
		<Tab.Group>
			<Tab.List className="tabs tabs-boxed">
				{/*  For each response create tabs */}
				{data?.map((item) => (
					<Tab className="tab" key={item.id}>
						{item.name}
					</Tab>
				))}
			</Tab.List>
			<Tab.Panels>
				{/*  For each response create Tab.Panel */}
				{data?.map((item) => (
					<Tab.Panel
						className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
						key={item.id}
					>
						{item.name}
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	);
}

export default Tabs;
