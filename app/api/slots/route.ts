import { NextApiRequest, NextApiResponse } from "next";

const slots = [  
		{
			"id": 1,
			"code": "p1",
			"name": "8:00-9:00",
			"start_time": "08:00:00",
			"end_time": "09:00:00",
			"is_practical": 0,
			"is_morning": 1,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:20",
			"updated_at": "2023-09-24 18:25:20"
		},
		{
			"id": 2,
			"code": "p2",
			"name": "9:00-10:00",
			"start_time": "09:00:00",
			"end_time": "10:00:00",
			"is_practical": 0,
			"is_morning": 1,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:20",
			"updated_at": "2023-09-24 18:25:20"
		},
		{
			"id": 3,
			"code": "p3",
			"name": "10:00-11:00",
			"start_time": "10:00:00",
			"end_time": "11:00:00",
			"is_practical": 0,
			"is_morning": 1,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:20",
			"updated_at": "2023-09-24 18:25:20"
		},
		{
			"id": 4,
			"code": "p4",
			"name": "11:00-12:00",
			"start_time": "11:15:00",
			"end_time": "12:15:00",
			"is_practical": 0,
			"is_morning": 1,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:20",
			"updated_at": "2023-09-24 18:25:20"
		},
		{
			"id": 5,
			"code": "p5",
			"name": "12:15-1:15",
			"start_time": "12:15:00",
			"end_time": "13:15:00",
			"is_practical": 0,
			"is_morning": 1,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:20",
			"updated_at": "2023-09-24 18:25:20"
		},
		{
			"id": 6,
			"code": "p6",
			"name": "1:30-2:30",
			"start_time": "13:30:00",
			"end_time": "14:30:00",
			"is_practical": 0,
			"is_morning": 1,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:20",
			"updated_at": "2023-09-24 18:25:20"
		},
		{
			"id": 7,
			"code": "p7",
			"name": "2:30-3:30",
			"start_time": "14:30:00",
			"end_time": "15:30:00",
			"is_practical": 0,
			"is_morning": 1,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 8,
			"code": "p8",
			"name": "3:30-4:30",
			"start_time": "15:30:00",
			"end_time": "16:30:00",
			"is_practical": 0,
			"is_morning": 1,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 17,
			"code": "practical",
			"name": "11:10-12:30",
			"start_time": "11:10:00",
			"end_time": "12:30:00",
			"is_practical": 1,
			"is_morning": 0,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 18,
			"code": "p2",
			"name": "1:30-2:10",
			"start_time": "13:30:00",
			"end_time": "14:10:00",
			"is_practical": 0,
			"is_morning": 0,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 19,
			"code": "p3",
			"name": "2:10-2:50",
			"start_time": "14:10:00",
			"end_time": "14:50:00",
			"is_practical": 0,
			"is_morning": 0,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 20,
			"code": "p4",
			"name": "2:50-3:30",
			"start_time": "14:50:00",
			"end_time": "15:30:00",
			"is_practical": 0,
			"is_morning": 0,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 21,
			"code": "p5",
			"name": "3:30-4:10",
			"start_time": "15:30:00",
			"end_time": "16:10:00",
			"is_practical": 0,
			"is_morning": 0,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 22,
			"code": "p6",
			"name": "4:10-4:50",
			"start_time": "16:10:00",
			"end_time": "16:50:00",
			"is_practical": 0,
			"is_morning": 0,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		},
		{
			"id": 23,
			"code": "p7",
			"name": "4:50-5:30",
			"start_time": "16:50:00",
			"end_time": "17:30:00",
			"is_practical": 0,
			"is_morning": 0,
			"institution_id": 1,
			"created_at": "2023-09-24 18:25:21",
			"updated_at": "2023-09-24 18:25:21"
		}
	]

export async function GET(request:NextApiRequest , response : NextApiResponse ) {
    return new Response(JSON.stringify(slots), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  }