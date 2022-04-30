import Handlebars from "handlebars";
import user from './user.hbs'
import { appLinkIcon } from "../../components/common/app-link-icon/appLinkIcon.tmpl";
import { backIcon } from "../../components/icons/back-icon/backIcon.tmpl";
import { imageIcon } from "../../components/icons/image-icon/imageIcon.tmpl";
import { userField } from "../../components/user/userField/userField.tmpl";
import { appLink } from "../../components/common/app-link/appLink.tmpl";

const methods = {
    registerPartials: () => {
        Handlebars.registerPartial('backLinkIcon', components.backLinkIcon)
        Handlebars.registerPartial('lastName', components.lastName)
        Handlebars.registerPartial('firstName', components.firstName)
        Handlebars.registerPartial('mail', components.mail)
        Handlebars.registerPartial('login', components.login)
        Handlebars.registerPartial('nameInChat', components.nameInChat)
        Handlebars.registerPartial('phone', components.phone)
        Handlebars.registerPartial('changeData', components.changeData)
        Handlebars.registerPartial('changePass', components.changePass)
        Handlebars.registerPartial('exitLink', components.exitLink)
    }
}

const components = {
    backLinkIcon: appLinkIcon({ icon: backIcon(), to: '/chats'}),
    avatarIcon: imageIcon(),
    lastName: userField({ name: 'Last name', value: 'Vadim', readonly: 'readonly' }),
    firstName: userField({ name: 'First name', value: 'Timofeev', readonly: 'readonly' }),
    mail: userField({ name: 'Email', value: 'vtimofeev223@gmail.com', readonly: 'readonly' }),
    login: userField({ name: 'Login', value: 'vtimofeev223', readonly: 'readonly' }),
    nameInChat: userField({ name: 'Name in chat', value: 'vtimofeev223', readonly: 'readonly' }),
    phone: userField({ name: 'Phone', value: '8 (966) 323 69 66', readonly: 'readonly' }),
    changeData: appLink({ to: '', linkText: 'To change the data' }),
    changePass: appLink({ to: '', linkText: 'To change the password' }),
    exitLink: appLink({ to: '', linkText: 'Exit', classes: 'text-red' }),


}

export const createPage = () => {

    methods.registerPartials()

    return Handlebars.compile(user({ avatarIcon: components.avatarIcon, userName: 'Vadim Timofeev' }))();
}
export const init = () => {

}
