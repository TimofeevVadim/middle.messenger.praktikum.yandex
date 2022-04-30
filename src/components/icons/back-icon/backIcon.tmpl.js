import Handlebars from "handlebars";
import tmpl from './backIcon.hbs'

export const backIcon = () => {
    return Handlebars.compile(tmpl())
}
