import React from 'react';

interface DropdownOption {
    value: string;
    text: string;
}

interface DynamicDropdownProps {
    options: DropdownOption[]; // Data to populate the dropdown
}

const DynamicDropdown: React.FC<DynamicDropdownProps> = ({ options }) => {
    return (
        <select>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
            ))}
        </select>
    );
};

export default DynamicDropdown;
