import * as Handlebars from 'handlebars';
import chat from './chat.hbs';
import appLink from '../../components/common/app-link/appLink.tmpl';

const components = {
  userLink: appLink({ to: '/user', linkText: 'User settings', classes: '' }),
};

const methods = {
  registerPartials: () => {
    Handlebars.registerPartial('userLink', components.userLink);
  },
};

export const createPage = () => {
  methods.registerPartials();
  return Handlebars.compile(chat())({});
};
export const init = () => {

};
