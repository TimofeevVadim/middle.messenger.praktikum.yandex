import * as Handlebars from 'handlebars';
import tmpl from './imageIcon.hbs';

const imageIcon = () => Handlebars.compile(tmpl());
export default imageIcon;
