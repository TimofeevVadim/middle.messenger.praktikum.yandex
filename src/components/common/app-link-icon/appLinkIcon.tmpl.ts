import * as Handlebars from 'handlebars';
import tmpl from './appLinkIcon.hbs';

const appLinkIcon = ({ icon, to }) => Handlebars.compile(tmpl({ icon, to }));
export default appLinkIcon;
