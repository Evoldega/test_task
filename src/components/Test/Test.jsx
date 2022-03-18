import React from 'react'
import Button from '../Button/Button'

import routes from '../../utils/routes'

import './Test.sass'

const Test = () => {
    return(

            <div 
                                className='test__wrapper'
                
            >    
                <div 
                                className="test"
                >
                    <ul
                                className='test__list'
                    >
                        <li 
                                className="test__item"
                            
                        >
                            <Button 
                                isLink={true}
                                className='test__link'
                                buttonInner='login'
                                to={routes.login}
                            />
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Test