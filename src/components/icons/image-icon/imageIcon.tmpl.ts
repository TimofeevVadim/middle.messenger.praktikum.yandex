import * as Handlebars from "handlebars";
import tmpl from './imageIcon.hbs';

export const imageIcon = () => {
    return Handlebars.compile(tmpl())
}
