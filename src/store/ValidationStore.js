import { makeAutoObservable } from "mobx"

class ValidationStore {

    email = ''
    password = ''

    emailError = 'Введите адрес электронной почты'
    passwordError = 'Введите пароль'

    isEmailNotValid = false
    isPasswordNotValid = false
    isFormValid = false


    constructor() {
        makeAutoObservable(this)
    }

    setEmail( string ) {
        this.email = string
    }
    setPassword( string ) {
        this.password = string
    }
    setEmailError( string ) {
        this.emailError = string
    }
    setPasswordError( string ) {
        this.passwordError = string
    }
    setEmailNotValid( boolean ) {
        this.isEmailNotValid = boolean
    }
    setPasswordNotValid( boolean ) {
        this.isPasswordNotValid = boolean
    }  
    setFormValid( boolean ) {
        this.isFormValid = boolean
    }

}

export default new ValidationStore()