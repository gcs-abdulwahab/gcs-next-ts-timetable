import { NextResponse } from 'next/server';
const days = 
	[
		{
			"id": 1,
			"number": 1,
			"name": "Monday",
			"code": "MON",
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 2,
			"number": 2,
			"name": "Tuesday",
			"code": "TUE",
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 3,
			"number": 3,
			"name": "Wednesday",
			"code": "WED",
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 4,
			"number": 4,
			"name": "Thursday",
			"code": "THU",
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 5,
			"number": 5,
			"name": "Friday",
			"code": "FRI",
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 6,
			"number": 6,
			"name": "Saturday",
			"code": "SAT",
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		}
	]

export async function GET() {

	/* return new Response(JSON.stringify(days), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
	});
	*/

	return NextResponse.json(days,{status:200});
	
  }