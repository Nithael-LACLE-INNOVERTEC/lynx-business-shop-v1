import { useState } from "react";

interface SelectOption {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: SelectOption[];
    placeholder?: string;
    classNameCustom?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, placeholder, classNameCustom }: CustomSelectProps) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("Choisir");
    const [isFocused, setIsFocused] = useState(false);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedValue(value);
        setErrorMessage(value ? "" : "Choisir");
    };

    return (
        <div className="relative w-full">
            <div className="relative">
                <select
                    value={selectedValue}
                    onChange={handleSelectChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none
                         dark:border-form-strokedark dark:bg-form-input dark:text-white
                            ${errorMessage ? "border-red-500" : "border-gray-300"} 
                            ${isFocused ? "focus:border-primary focus-visible:shadow-none  dark:focus:border-primary" : ""} 
                            bg-white ${classNameCustom}`
                    }
                >
                    <option value="" disabled>
                        {placeholder || "sélectionner"}
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                {/* Icône de flèche */}
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </div>
            {errorMessage && (
                <span className="flex items-center gap-2 text-red-600 text-sm mt-1">
                    <svg
                        className="w-4 h-4 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage}
                </span>
            )}
        </div>
    );
};

export default CustomSelect;