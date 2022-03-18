import React from 'react'

import '../Input/Input.sass'


const Input = (props) => {

    return(
    <div className={`input`}>
        {
            props.hasLabel
            ?
                <label 
                    htmlFor={props.htmlFor}
                    className={`input__label`}
                >
                    {props.labelInner}
                </label>
            :
                null
        }
            <input

                            onBlur={props.onBlur}
                            onChange={props.onChange}
                            type={props.type}
                            name={props.name}
                            className={`input__input`}
                            placeholder={props.placeholder}
                            autoComplete='off'
            />
            {props.inputInner}  
    </div>
    )
}

export default Input