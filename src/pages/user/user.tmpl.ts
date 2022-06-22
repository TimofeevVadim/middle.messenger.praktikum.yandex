import * as Handlebars from 'handlebars';
import userLayout from '../../layout/user/userLayout.tmpl';
import { userForm, userButtons } from '../../components/user/userComponents.tmpl';

const components = {
  form: userForm({ userName: 'Vadim Timofeev' }),
  buttons: userButtons(),
};

export const createPage = () => Handlebars.compile(userLayout({ form: components.form, buttons: components.buttons }))({});
export const init = () => {

};
