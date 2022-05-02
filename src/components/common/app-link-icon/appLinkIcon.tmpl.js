import Handlebars from "handlebars";
import tmpl from './appLinkIcon.hbs'

export const appLinkIcon = ({ icon, to }) => {
    return Handlebars.compile(tmpl({ icon, to }))
}
