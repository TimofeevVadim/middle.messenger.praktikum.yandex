import * as Handlebars from "handlebars";
import tmpl from './userField.hbs'

export const userField = ({ name, value, readonly }) => {
    return Handlebars.compile(tmpl({ name, value, readonly }))
}
