import * as Handlebars from "handlebars";
import { changeDataButtons, changeDataForm} from "../../components/change-data/changeDataComponents.tmpl";
import { userLayout } from "../../layout/user/userLayout.tmpl";

const components = {
    form: changeDataForm(),
    buttons: changeDataButtons()
}

export const createPage = () => {
    return Handlebars.compile(userLayout({
        form: components.form,
        buttons: components.buttons,
        backLink: '/user'
    }))({});
}
export const init = () => {

}
