import React from 'react'
import { observer } from 'mobx-react-lite'

import './Login.sass'

import validation from '../../store/ValidationStore'
import routes from '../../utils/routes'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Title from '../Title/Title'
import Error from '../Error/Error'




function emailHandler(e) {
    let value = e.target.value
    let req = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    validation.setEmail(value)
    if(!req.test( String(value).toLowerCase() )) {
        validation.setEmailError( 'Некорректный email' )
    } else {
        validation.setEmailError( '' )
    }
}

function passwordHandler(e) {
    let value = e.target.value
    let req = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/
    validation.setPassword(value)
    if(!req.test( value )) {
        validation.setPasswordError( 'Пароль должен содержать не менее 8 символов, которые включают в себя заглавные буквы, цифры и специальные символы.' )
    } else {
        validation.setPasswordError( '' )
    }
}
function blurHandler( e ) {
    switch ( e.target.name ) {
        case 'email':
            validation.setEmailNotValid( true )    
            break
        case 'password':
            validation.setPasswordNotValid( true )
            break
    }
}



const Login = observer( () => {

    React.useEffect( () => {
        if( validation.emailError || validation.passwordError ) {
            validation.setFormValid( false )
        } else {
            validation.setFormValid( true )
        }
    }, [ validation.emailError, validation.passwordError ] )

    return(
        <section 
                            className="login"
        >
            <div 
                            className='login__form'
            >
                <Title 
                            inner='Авторизация'
                />
                <Input
                            type='text'
                            name='email'
                            htmlFor='email'
                            hasLabel={true}
                            placeholder='Почта'
                            labelInner='Адрес электронной почты'
                            value={validation.email}
                            onBlur={e => blurHandler(e)}
                            onChange={e => emailHandler(e)}
                            inputInner={(validation.isEmailNotValid && validation.emailError) && <Error text={validation.emailError}/>}
                />
                <Input
                            type="password" 
                            name="password" 
                            htmlFor='password'
                            hasLabel={true}
                            placeholder='Пароль'
                            labelInner='Пароль'
                            value={validation.password}
                            onBlur={e => blurHandler(e)}
                            onChange={e => passwordHandler(e)}
                            inputInner={(validation.isPasswordNotValid && validation.passwordError) && <Error text={validation.passwordError}/>}                 
                />
                <Button
                            className='button'
                            buttonInner='Войти'
                            type="submit" 
                            disabled={!validation.isFormValid}
                />
                <div 
                            className="link__container"
                >
                    <Button
                            className='link'
                            buttonInner='Зарегистрироваться'
                            to={routes.signup}
                            isLink={true}
                    />
                    <div    
                            className="slash">
                            &#160; / &#160;
                    </div>
                    <Button
                            className='link'
                            buttonInner='Забыли пароль?'
                            to={routes.reset}
                            isLink={true}
                    />
                </div>
            </div>
        </section>
    )
} )

export default Login