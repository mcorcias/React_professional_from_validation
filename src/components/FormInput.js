
import { useState } from 'react';
import './FormInput.css'
export default function FormInput({label, errorMessage, onChange, id, ...inputProps}) {
  
    const [focused,setFocused] = useState(false)

    const handleFocus = (e) => {
        setFocused(true)
    }
    return (
        <div className="formInput">
            <label>{label}</label>
            <input 
                focused={focused.toString()}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
            />
            <span>{errorMessage}</span>
        </div>
    )
}
