const courses = 
	[
		{
			"id": 1,
			"name": "Course Name 101",
			"is_default": 0,
			"display_code": "OVM494",
			"code": "BSCS-101-BS-BSCS-E-1st Semester",
			"credit_hours": 3,
			"type": "CLASS",
			"semester_id": 1,
			"created_at": "2023-09-24 18:25:22",
			"updated_at": "2023-09-24 18:25:22"
		},
		{
			"id": 2,
			"name": "Course Name 102",
			"is_default": 0,
			"display_code": "OVM494",
			"code": "BSCS-102-BS-BSCS-E-1st Semester",
			"credit_hours": 3,
			"type": "CLASS",
			"semester_id": 1,
			"created_at": "2023-09-24 18:25:22",
			"updated_at": "2023-09-24 18:25:22"
		},
		{
			"id": 3,
			"name": "Course Name 103",
			"is_default": 0,
			"display_code": "IIA125",
			"code": "BSCS-103-BS-BSCS-E-1st Semester",
			"credit_hours": 3,
			"type": "CLASS",
			"semester_id": 1,
			"created_at": "2023-09-24 18:25:22",
			"updated_at": "2023-09-24 18:25:22"
		},
		{
			"id": 4,
			"name": "Course Name 104",
			"is_default": 0,
			"display_code": "MJY854",
			"code": "BSCS-104-BS-BSCS-E-1st Semester",
			"credit_hours": 3,
			"type": "CLASS",
			"semester_id": 1,
			"created_at": "2023-09-24 18:25:22",
			"updated_at": "2023-09-24 18:25:22"
		},
		{
			"id": 5,
			"name": "Course Name 105",
			"is_default": 0,
			"display_code": "XUW182",
			"code": "BSCS-105-BS-BSCS-E-1st Semester",
			"credit_hours": 3,
			"type": "CLASS",
			"semester_id": 1,
			"created_at": "2023-09-24 18:25:22",
			"updated_at": "2023-09-24 18:25:22"
		}
	]



  export async function GET() {
    return new Response(JSON.stringify(courses), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  }
