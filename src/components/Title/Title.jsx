import React from 'react'
import './Title.sass'

const Title = ({inner}) => {
    return(
        <>
            <div 
                className="title"
            >
                {inner}
            </div>
        </>
    )
}

export default Title