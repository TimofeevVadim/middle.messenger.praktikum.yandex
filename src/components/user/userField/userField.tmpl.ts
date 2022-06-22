import * as Handlebars from 'handlebars';
import tmpl from './userField.hbs';

const userField = ({ name, value, readonly }) => Handlebars.compile(tmpl({ name, value, readonly }));

export default userField;
