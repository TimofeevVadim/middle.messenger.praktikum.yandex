import Handlebars from "handlebars";
import tmplUserButtons from './userButtons.hbs'
import tmplUserForm from './userForm.hbs'

import { userField } from "./userField/userField.tmpl";
import { appLink } from "../common/app-link/appLink.tmpl";

const methods = {
    registerPartialsForm: () => {
        Handlebars.registerPartial('lastName', components.lastName)
        Handlebars.registerPartial('firstName', components.firstName)
        Handlebars.registerPartial('mail', components.mail)
        Handlebars.registerPartial('login', components.login)
        Handlebars.registerPartial('nameInChat', components.nameInChat)
        Handlebars.registerPartial('phone', components.phone)
    },
    registerPartialsButtons: () => {
        Handlebars.registerPartial('changeData', components.changeData)
        Handlebars.registerPartial('changePass', components.changePass)
        Handlebars.registerPartial('exitLink', components.exitLink)
    }
}

const components = {
    lastName: userField({ name: 'Last name', value: 'Vadim', readonly: 'readonly' }),
    firstName: userField({ name: 'First name', value: 'Timofeev', readonly: 'readonly' }),
    mail: userField({ name: 'Email', value: 'vtimofeev223@gmail.com', readonly: 'readonly' }),
    login: userField({ name: 'Login', value: 'vtimofeev223', readonly: 'readonly' }),
    nameInChat: userField({ name: 'Name in chat', value: 'vtimofeev223', readonly: 'readonly' }),
    phone: userField({ name: 'Phone', value: '8 (966) 323 69 66', readonly: 'readonly' }),
    changeData: appLink({ to: '/edit', linkText: 'To change the data' }),
    changePass: appLink({ to: '/change-pass', linkText: 'To change the password' }),
    exitLink: appLink({ to: '/login', linkText: 'Exit', classes: 'text-red' }),
}

export const userForm = ({ userName }) => {
    methods.registerPartialsForm()
    return Handlebars.compile(tmplUserForm({ userName }))
}

export const userButtons = () => {
    methods.registerPartialsButtons()
    return Handlebars.compile(tmplUserButtons())
}
