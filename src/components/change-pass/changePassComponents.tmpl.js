import Handlebars from "handlebars";
import tmplForm from './changePassForm.hbs'
import tmplButton from './changePassButton.hbs'
import { userField } from "../user/userField/userField.tmpl";
import { appButton } from "../common/app-button/appButton.tmpl";

const methods = {
    registerPartialsForm: () => {
        Handlebars.registerPartial('oldPass', components.oldPass)
        Handlebars.registerPartial('newPass', components.newPass)
        Handlebars.registerPartial('repeatPass', components.repeatPass)
    },
    registerPartialsButton: () => {
        Handlebars.registerPartial('saveButton', components.saveButton)
    }
}

const components = {
    oldPass: userField({ name: 'Old pass', value: '12345' }),
    newPass: userField({ name: 'New pass', value: '' }),
    repeatPass: userField({ name: 'Repeat pass', value: '' }),
    saveButton: appButton({ buttonText: 'Save' })
}

export const changePassForm = () => {
    methods.registerPartialsForm()
    return Handlebars.compile(tmplForm())
}
export const changeButton = () => {
    methods.registerPartialsButton()
    return Handlebars.compile(tmplButton())
}
