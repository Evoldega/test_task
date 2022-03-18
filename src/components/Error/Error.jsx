import React from 'react'

import './Error.sass'

const Error = ({text}) => {
    return(
        <div className="error">
            {text}
        </div>
    )
}

export default Error