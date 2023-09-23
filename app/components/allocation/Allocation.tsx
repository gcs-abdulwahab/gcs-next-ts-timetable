"use client"
import { rooms, teachers } from '@/app/data';
import { useState } from 'react';
//import useQuery from tanStack React Query

import DayGroup from "../day/DayGroup";
import CourseInput from '../UI/CourseInput';

interface AllocationProps {
    sectionid: number; // Example: If section_id is a number
    slotid: number;    // Example: If slotid is a number
}

const Allocation: React.FC<AllocationProps> = ({ sectionid, slotid }) => {

    /*  Allocate the course id  and number of days and room id  and teacher id  */

    // State to keep track of the selected dayoption
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    
    // create a state for the selected teacher
    const [teacherID, setTeacherID] = useState<number | null>(null);
    // create a state for the selected course
    const [courseID, setCourseID] = useState<number | null>(null);
    // create a state for the selected room
    const [roomID, setRoomID] = useState<number | null>(null);


    const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedRoom = parseInt(e.target.value)
        setRoomID(selectedRoom ? selectedRoom : null);
    };

    const handleTeacherChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTeacher =parseInt(e.target.value);
        setTeacherID(selectedTeacher ? selectedTeacher : null);
    };

    const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCourse = parseInt(e.target.value);
        setCourseID(selectedCourse ? selectedCourse : null);
    };


    const handleAllocate = () => {

        // get the selected days , teacher , course , room  and call the api function
        console.log(selectedDays, teacherID, courseID, roomID);
        // get the selected days , teacher , course , room  and call the api function
    }

    /*  Allocate the course id  and number of days and room id  and teacher id  */
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto flex flex-wrap items-center">
                <div className=" bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-2/3 mt-10 space-y-4 ">
                    <h1>Section ID: {sectionid}</h1>
                    <h1>Slot ID: {slotid}</h1>
                    <h1>Teacherid :{teacherID}  </h1>
                    <h1>Courseid :{courseID}  </h1>
                    <h1>Roomid :{roomID}  </h1>
                    <h2 >selectedDays : {selectedDays}</h2>

                    {/* Teacher Selection */}
                    <select   onChange={handleTeacherChange}  className="select select-bordered w-full max-w-xs" name="teacher">
                        <option selected>Select Teacher</option>
                        {
                            teachers.map((teacher) => (
                                <option key={teacher.id} value={teacher.id}>
                                    {`${teacher.name} `}
                                </option>
                            ))
                        }
                    </select>
                            {/* PLAN B: We are passing the semester id and lifting the state of courseid
                                and CourseInput has to use ReactQuery to fetch the courses
                            */}
                    <CourseInput  semesterid = {1}   courseID={courseID} setCourseID={setCourseID} />
                    
                    {/* Room Selection */}
                    <select onChange={handleRoomChange} className="select select-bordered w-full max-w-xs" name="room">
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

                    <DayGroup selectedDays={selectedDays} setSelectedDays={setSelectedDays} />

                    <button className="btn btn-primary" onClick={handleAllocate} >Allocate</button>
                    <p className="text-xs">Literally </p>
                </div>



            </div>
        </section>


    )
}

export default Allocation