import * as Handlebars from "handlebars";
import { changePassForm, changeButton } from "../../components/change-pass/changePassComponents.tmpl";
import { userLayout } from "../../layout/user/userLayout.tmpl";

const components = {
    form: changePassForm(),
    buttons: changeButton()
}

export const createPage = () => {
    return Handlebars.compile(userLayout({
        form: components.form,
        buttons: components.buttons,
        backLink: '/user'
    }))({})
}
export const init = () => {

}
