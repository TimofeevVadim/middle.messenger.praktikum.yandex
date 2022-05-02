import Handlebars from "handlebars";
import login from './login.hbs'

import { loginForm, init as initLoginForm} from "../../components/login/loginForm.tmpl";

const methods = {
    registerPartials: () => {
        Handlebars.registerPartial('loginForm', components.loginForm)
    },
    registerHelpers: () => {
        console.log('registerHelpers')
    },
}

const components = {
    loginForm: loginForm()
}


export const createPage = () => {
    methods.registerHelpers()
    methods.registerPartials()
    return login()
}

export const init = () => {
    initLoginForm()
}
