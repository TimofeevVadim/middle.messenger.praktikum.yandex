import Handlebars from "handlebars";
import tmpl from './appLink.hbs'

export const appLink = ({ to, linkText, classes }) => {
    return Handlebars.compile(tmpl({ to, linkText, classes }))
}
