import { useState } from 'react';
import './uistyle.css'
function FormInput(props){
    const [focused,setFocused] = useState(false);
    const handleFocus = ()=>{
        setFocused(true)
    }
    const options = props.options;
    return(
        props.type==="select"?
        
        <div className='mt-4'>
            <label >{props.placeholder}</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    onChange={props.onChange}
                    name={props.name}
            >
                {options.map(option=>(
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
        :
        <div className='mt-4'>
            <label >{props.placeholder}</label>
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded "
                   name={props.name} 
                   type={props.type}
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
export default FormInput;