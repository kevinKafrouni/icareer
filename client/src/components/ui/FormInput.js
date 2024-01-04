import { useState } from 'react';
import './uistyle.css'
import Select from 'react-select';
function FormInput(props){
    const [focused,setFocused] = useState(false);
    const handleFocus = ()=>{
        setFocused(true)
    }
    const options = props.options;

    if(props.type==="select"){
        return(
            <div className='mt-4'>
                <label >{props.placeholder}</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        onChange={props.onChange}
                        name={props.name}
                        value={props.value}
                >
                    {options.map(option=>(
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        )
    }else if(props.type==="searchSelect"){
        const customStyles = {
            menu: (provided) => ({
                ...provided,
                zIndex: 9999, // Set a high z-index value for the dropdown menu
                position: 'absolute', // Set the position to absolute
                top: '100%', // Position the dropdown below the select input
                left: 0,
                right: 0,
            }),
        };

        const selectOptions = options.map((option) => ({
            label: option.label,
            value: option.value,
        }));

        return(
            <div className='mt-4 relative'>
                <label>{props.placeholder}</label>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    onChange={props.onChange}
                    options={selectOptions}
                    value={selectOptions.find((option) => option.value === props.value)}
                    isSearchable
                    name={props.name}
                    styles={customStyles}
                />
            </div>
        )
    }else{
        return(
            <div className='mt-4'>
            <label >{props.placeholder}</label>
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded "
                   name={props.name} 
                   type={props.type}
                   value={props.value}
                   placeholder={props.placeholder} 
                   onChange={props.onChange}
                   autoComplete="off"
                   pattern={props.pattern}
                   required={props.required}
                   onBlur={handleFocus}
                   focused={focused.toString()}
                   />
                   <span className="font-light text-sm text-red-700 custom-input-span">{props.errmsg}</span>
        </div>
        )
    }
}
export default FormInput;