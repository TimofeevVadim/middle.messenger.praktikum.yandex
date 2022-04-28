import tmpl from './appInput.hbs'
import Handlebars from 'handlebars'
export const input = () => {
    return Handlebars.compile(tmpl({
        people: [
            'Аркадий Волож',
            'Стив Джобс',
            'Марк Цукерберг',
        ],
    }))();
}
