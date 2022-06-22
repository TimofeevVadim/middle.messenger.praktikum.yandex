import * as Handlebars from 'handlebars';
import notFound from './notFound.hbs';
import appLink from '../../components/common/app-link/appLink.tmpl';

const components = {
  backLink: appLink({ to: '/login', linkText: 'Back to chats', classes: '' }),
};

const methods = {
  registerPartials: () => {
    Handlebars.registerPartial('backLink', components.backLink);
  },
};

export const createPage = () => {
  methods.registerPartials();

  return Handlebars.compile(notFound())({});
};
export const init = () => {

};
