import Handlebars from "handlebars";
import auth from './auth.hbs'
import { authForm, init as initAuthForm } from "../../components/auth/auth-form/authForm.tmpl";

const methods = {
    registerPartial: () => {
        Handlebars.registerPartial('authForm', authForm())
    }
}

const components = {
}

export const createPage = () => {

    methods.registerPartial()

    return Handlebars.compile(auth())();
}
export const init = () => {
    initAuthForm()
}
