import React from 'react'
import './Button.sass'
import { Link } from "react-router-dom"

const Button = ({
    buttonInner, isLink, to, type, onClick, className, disabled, active, ...attrs
  }) => {

    const Tag = attrs.href ? 'a' : 'button'

    return(
        <div
                className={className}
        >
            {
            isLink
            ?
            <Link 
                to={to}
                className={className}
                onClick={onClick}
            >
                {buttonInner}
            </Link>
            :
            <Tag
                type={type}
                className={`${isLink ? 'link' : Tag}`}
                disabled={disabled}
                onClick={onClick}
            >
                {buttonInner}
            </Tag>
            }
        </div>
    )
}

export default Button