"use client"

import { useState } from "react";

interface DayGroupProps {
    selectedDays: number[];
    setSelectedDays: React.Dispatch<React.SetStateAction<number[]>>;
    
  }

    const DayGroup: React.FC<DayGroupProps> = ({ selectedDays, setSelectedDays }) => {

    
    const days = [
        { name: "MON", number: 1 },
        { name: "TUE", number: 2 },
        { name: "WED", number: 3 },
        { name: "THU", number: 4 },
        { name: "FRI", number: 5 },
        { name: "SAT", number: 6 },
    ];

    const daysOption = [
        { option: "1-3", numbers: [1, 2, 3] },
        { option: "1-4", numbers: [1, 2, 3, 4] },
        { option: "4-6", numbers: [4, 5, 6] },
        { option: "5-6", numbers: [5, 6] },
    ];

    // State to keep track of the selected dayoption
    const [selectedDayOption, setSelectedDayOption] = useState<string | null>(null);

    
    // Function to handle the selection of a dayoption
    const handleDayOptionSelection = (option: string) => {
        // Unselect the day option if it's already selected
        if (selectedDayOption === option) {
            setSelectedDayOption(null);
        } else {
            setSelectedDayOption(option);
            // Find the corresponding dayoption and set the selected days
            const selectedOption = daysOption.find((day) => day.option === option);
            setSelectedDays(selectedOption ? selectedOption.numbers : []);
        }
    };

    return (
        <>
            <div className='flex flex-col items-center space-y-1'>

                <div className="join  ">
                    {daysOption.map((dayoption) => (
                        <label key={dayoption.option} className="join-item btn ">
                            <input
                                type="radio"
                                name="daysoption"
                                className="radio"
                                value={dayoption.option}
                                checked={selectedDayOption === dayoption.option}
                                onChange={() => handleDayOptionSelection(dayoption.option)}
                            />
                            {dayoption.option}
                        </label>
                    ))}
                </div>

                <div className="join">
                    {days.map((day) => (
                        <label key={day.number} className="join-item btn">
                            <input
                                type="checkbox"
                                className="checkbox"
                                name="days"
                                value={day.name}
                                checked={selectedDays.includes(day.number)}
                                onChange={() => {
                                    if (selectedDays.includes(day.number)) {
                                        // Remove the day from the selected days if already selected
                                        setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day.number));
                                    } else {
                                        // Add the day to the selected days if not already selected
                                        setSelectedDays([...selectedDays, day.number]);
                                    }
                                    // Unselect the day option when any day is changed
                                    setSelectedDayOption(null);
                                }}
                            />
                            {day.name}
                        </label>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DayGroup;
