import Handlebars from "handlebars";
import auth from './auth.hbs'

export const createPage = () => {
    return Handlebars.compile(auth())();
}
