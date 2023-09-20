import React, { useState } from 'react';

interface DropdownOption {
    value: number;
    text: string;
}

interface DynamicDropdownProps {
    options: DropdownOption[]; // Data to populate the dropdown
    onValueChange: (selectedValue: number) => void; // Callback function to handle value change

    [key: string]: any; // Allow any number of optional parameters with any key

}

const DynamicDropdown: React.FC<DynamicDropdownProps> = ({ options, onValueChange }) => {
    const [selectedValue, setSelectedValue] = useState<number | undefined>(undefined);

    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = parseInt(event.target.value, 10);
        setSelectedValue(newValue);
        onValueChange(newValue);
    };

    return (
        <select value={selectedValue} onChange={handleDropdownChange}>
            <option  value={undefined}>Select an option</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
            ))}
        </select>
    );
};

export default DynamicDropdown;
