// import * as Handlebars from 'handlebars';
import login from './login.hbs';
import Block from '../../classes/Block';
import { LoginForm } from '../../components/login/loginForm.tmpl';

// import { loginForm, init as initLoginForm } from '../../components/login/loginForm.tmpl';

// const components = {
//   loginForm: loginForm(),
// };
//
// const methods = {
//   registerPartials: () => {
//     Handlebars.registerPartial('loginForm', components.loginForm);
//   },
//   registerHelpers: () => {
//     console.log('registerHelpers');
//   },
// };
//
// export const createPage = () => {
//   methods.registerHelpers();
//   methods.registerPartials();
//   return login();
// };
//
// export const init = () => {
//   initLoginForm();
// };

export default class LoginPage extends Block {
  protected initChildren() {
    this.children.loginForm = new LoginForm();
  }

  protected render(): DocumentFragment {
    return this.compile(login, {});
  }
}
