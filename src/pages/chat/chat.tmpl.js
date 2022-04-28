import Handlebars from "handlebars";
import chat from './chat.hbs'

export const createPage = () => {
    return Handlebars.compile(chat())();
}
