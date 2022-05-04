import * as Handlebars from "handlebars";
import tmplChangeDataForm from './changeDataForm.hbs'
import tmplChangeDataButtons from './changeDataButtons.hbs'

import { userField } from "../user/userField/userField.tmpl";
import { appButton } from "../common/app-button/appButton.tmpl";

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
        Handlebars.registerPartial('saveButton', components.saveButton)
    }
}

const components = {
    lastName: userField({ name: 'Last name', value: 'Vadim' }),
    firstName: userField({ name: 'First name', value: 'Timofeev' }),
    mail: userField({ name: 'Email', value: 'vtimofeev223@gmail.com' }),
    login: userField({ name: 'Login', value: 'vtimofeev223' }),
    nameInChat: userField({ name: 'Name in chat', value: 'vtimofeev223' }),
    phone: userField({ name: 'Phone', value: '8 (966) 323 69 66' }),
    saveButton: appButton({ buttonText: 'Save' })
}

export const changeDataForm = () => {
    methods.registerPartialsForm()
    return Handlebars.compile(tmplChangeDataForm())
}

export const changeDataButtons = () => {
    methods.registerPartialsButtons()
    return Handlebars.compile(tmplChangeDataButtons())
}
