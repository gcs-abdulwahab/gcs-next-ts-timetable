"use client"
import { courses, rooms, teachers } from '@/app/data';
import { useState } from 'react';
//import useQuery from tanStack React Query
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

import DayGroup from "../day/DayGroup";

interface AllocationProps {
    sectionid: number; // Example: If section_id is a number
    slotid: number;    // Example: If slotid is a number
}

type TeacherType = {
    id: number;
    name: string;
    departmentName: string;
}

type CourseType = {
    id: number;
    code: string;
    name: string;
}

type RoomType = {
    id: number;
    code: string;
    name: string;
}

const Allocation: React.FC<AllocationProps> = ({ sectionid, slotid }) => {


    const queryClient = new QueryClient()


    /*  Allocate the course id  and number of days and room id  and teacher id  */

    // State to keep track of the selected dayoption
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    // create a state for the selected teacher
    const [teacher, setTeacher] = useState<TeacherType | null>(null);
    // create a state for the selected course
    const [course, setCourse] = useState<CourseType | null>(null);
    // create a state for the selected room
    const [room, setRoom] = useState<RoomType | null>(null);


    const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedRoom = rooms.find((room) => room.id === parseInt(e.target.value));
        setRoom(selectedRoom ? selectedRoom : null);
    };

    const handleTeacherChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTeacher = teachers.find((teacher) => teacher.id === parseInt(e.target.value));
        setTeacher(selectedTeacher ? selectedTeacher : null);
    };
    
    const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCourse = courses.find((course) => course.id === parseInt(e.target.value));
        setCourse(selectedCourse ? selectedCourse : null);
    };

    
    const handleAllocate = () => {
    
        // get the selected days , teacher , course , room  and call the api function
        console.log(selectedDays, teacher, course, room);
        // get the selected days , teacher , course , room  and call the api function


    
    }


    /*  Allocate the course id  and number of days and room id  and teacher id  */

    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto flex flex-wrap items-center">
                
                    <div className=" bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-2/3 mt-10 space-y-4 ">
                        <h1>Section ID: {sectionid}</h1>
                        <h1>Slot ID: {slotid}</h1>
                        <h1>Teacherid :{teacher?.id}  </h1>
                        <h1>Courseid :{course?.id}  </h1>
                        <h1>Roomid :{room?.id}  </h1>
                        <h2 >selectedDays : {selectedDays}</h2>

                        {/* Teacher Selection */}
                        <select onChange={handleTeacherChange} className="select select-bordered w-full max-w-xs" name="teacher">
                            <option  selected>Select Teacher</option>
                            {
                                teachers.map((teacher) => (
                                    <option key={teacher.id} value={teacher.id}>
                                        {`${teacher.name} `}
                                    </option>
                                ))
                            }
                        </select>


                        {/* Course Selection */}
                        <select  onChange={handleCourseChange} className="select select-bordered w-full max-w-xs" name="course">
                            <option disabled selected>Select Course</option>
                            {
                                courses.map((course) => (
                                    <option key={course.id} value={course.id}>
                                        {`${course.code} (${course.name})`}
                                    </option>
                                ))}
                        </select>
                        {/* Room Selection */}
                        <select  onChange={handleRoomChange} className="select select-bordered w-full max-w-xs" name="room">
                            <option disabled selected>Select Room</option>
                            {
                                rooms.map((room) => (
                                    <option key={room.id} value={room.id}>
                                        {`${room.code} (${room.name})`}
                                    </option>
                                ))
                            }
                        </select>

                        {/* Day Selection */}
                        
                            <DayGroup  selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
                        
                        <button  className="btn btn-primary" onClick={handleAllocate} >Allocate</button>
                        <p className="text-xs">Literally </p>
                    </div>
                


            </div>
        </section>


    )
}

export default Allocation