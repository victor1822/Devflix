
import React from "react";

function FormField({ label, tag, type, name, value, onChange }) {
    if(tag==="textarea"){
        return (
            <div>
            <label>
                {label}: 
                <textarea
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                />
            </label>
            </div>
        )
    }
    else{
        return (
            <div>
            <label>
                {label}: 
                <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                />
            </label>
            </div>
        )
    }
}

export default FormField;