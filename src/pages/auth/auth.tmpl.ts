import * as Handlebars from "handlebars";
import template from './auth.hbs'
import { authForm, init as initAuthForm } from "../../components/auth/auth-form/authForm.tmpl";


const methods = {
    registerPartial: () => {
        Handlebars.registerPartial('authForm', authForm())
    },
}

const components = {
}

export const createPage = ():string => {
    methods.registerPartial()
    return Handlebars.compile(template())({});
}
export const init = (): void => {
    initAuthForm()
}
