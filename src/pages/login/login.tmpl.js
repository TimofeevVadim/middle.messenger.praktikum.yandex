import Handlebars from "handlebars";
import login from './login.hbs'

export const createPage = () => {
    return Handlebars.compile(login())();
}
