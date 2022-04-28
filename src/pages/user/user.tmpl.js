import Handlebars from "handlebars";
import user from './user.hbs'

export const createPage = () => {
    return Handlebars.compile(user())();
}
