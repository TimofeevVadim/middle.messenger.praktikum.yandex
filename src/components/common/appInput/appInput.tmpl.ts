import tmpl from './appInput.hbs'
import * as Handlebars from 'handlebars'
export const appInput = ({ value, placeholder, type = 'text', id }) => {
    return Handlebars.compile(tmpl({
        value,
        placeholder,
        type,
        id
    }))({});
}
