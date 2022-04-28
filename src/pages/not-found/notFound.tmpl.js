import Handlebars from "handlebars";
import notFound from './notFound.hbs'

export const createPage = () => {
    return Handlebars.compile(notFound())();
}
