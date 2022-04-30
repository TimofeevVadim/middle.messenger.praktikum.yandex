import Handlebars from "handlebars";
import tmpl from "./appButton.hbs"

export const appButton = ({ buttonText } ) => {
    return Handlebars.compile(tmpl({ buttonText }))()
}
