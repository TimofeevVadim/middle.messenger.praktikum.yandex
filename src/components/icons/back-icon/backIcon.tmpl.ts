import * as Handlebars from 'handlebars';
import tmpl from './backIcon.hbs';

const backIcon = () => Handlebars.compile(tmpl());
export default backIcon;
