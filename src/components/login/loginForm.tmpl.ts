import * as Handlebars from "handlebars";
import tmpl from './loginForm.hbs'
import { appInput } from "../common/appInput/appInput.tmpl";
import { appButton } from "../common/app-button/appButton.tmpl";
import { appLink } from "../common/app-link/appLink.tmpl";

const data = {
    login: '',
    password: '',
}

const methods = {
    registerPartials: () => {
        Handlebars.registerPartial('loginInput', components.loginInput)
        Handlebars.registerPartial('passwordInput', components.passwordInput)
        Handlebars.registerPartial('loginBtn', components.loginBtn)
        Handlebars.registerPartial('createAcc', components.appLink)
    },
    registerHelpers: () => {
        Handlebars.registerHelper('click', () => {
            console.log('click')
        });
    },
    oninput: (e) => {
        data[e.target.id] = e.target.value
    },
    click: () => {
        console.log(data, 'data')
        location.replace('/chats')
    }
}

const components = {
    loginInput: appInput({ value: data.login, placeholder: 'Login', id: 'login' }),
    passwordInput: appInput({value: data.password, placeholder: 'Password', id: 'password', type: 'password' }),
    loginBtn: appButton({ buttonText: 'Sign in' }),
    appLink: appLink({ to: '/auth', linkText: 'Create Account', classes: '' })
}

export const loginForm = () => {
    methods.registerHelpers()
    methods.registerPartials()
    return Handlebars.compile(tmpl())
}
export const init = () => {
    const login = document.getElementById('login')
    const password = document.getElementById('password')
    const button = document.getElementById('button')

    login.oninput = methods.oninput
    password.oninput = methods.oninput
    button.onclick = methods.click
}
