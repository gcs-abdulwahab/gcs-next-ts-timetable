"use client"
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import DayGroup from "../day/DayGroup";

interface AllocationProps {
    sectionid: number; // Example: If section_id is a number
    slotid: number;    // Example: If slotid is a number
}

type Inputs = {
    example: string
    exampleRequired: string
}


const Allocation: React.FC<AllocationProps> = ({ sectionid, slotid }) => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    /*  Allocate the course id  and number of days and room id  and teacher id  */


    // State to keep track of the selected dayoption
    const [selectedDays, setSelectedDays] = useState<number[]>([]);

    const days = selectedDays
    let courseid = 1
    let teacherid = 1
    let roomid = 1
    let slot = 1
    let section = 1


    /*  Allocate the course id  and number of days and room id  and teacher id  */

    return (
        // /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     {/* register your input into the hook by invoking the "register" function */}
        //     <input defaultValue="test" {...register("example")} />

        //     {/* include validation with required or other standard HTML validation rules */}
        //     <input {...register("exampleRequired", { required: true })} />
        //     {/* errors will return when field validation fails  */}
        //     {errors.exampleRequired && <span>This field is required</span>}

        //     <input type="submit" />
        // </form>


        <section className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto flex flex-wrap items-center">

                <div className=" bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-2/3 mt-10 space-y-4 ">
                    <h2 >Allocation : {selectedDays}</h2>

                    <input placeholder="Teacher" type="text" id="teacherid" name="teacherid" className="input w-full max-w-xs input-primary" />
                    <input placeholder="Room" type="text" id="roomid" name="roomid" className="input w-full max-w-xs input-primary" />
                    <input placeholder="Course" type="text" id="courseid" name="courseid" className="input w-full max-w-xs input-primary" />
                    <DayGroup selectedDays={selectedDays} setSelectedDays={setSelectedDays} />

                    <button className="btn btn-primary">Allocate</button>
                    <p className="text-xs">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
        </section>


    )
}

export default Allocation