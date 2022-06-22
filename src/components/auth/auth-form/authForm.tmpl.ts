import * as Handlebars from 'handlebars';
import appInput from '../../common/appInput/appInput.tmpl';
import appButton from '../../common/app-button/appButton.tmpl';
import appLink from '../../common/app-link/appLink.tmpl';
import tmpl from './authForm.hbs';

const components = {
  mail: appInput({
    value: '', placeholder: 'Email', type: 'email', id: 'email',
  }),
  login: appInput({
    value: '', placeholder: 'Login', type: 'text', id: 'login',
  }),
  firstName: appInput({
    value: '', placeholder: 'First Name', type: 'text', id: 'first-name',
  }),
  lastName: appInput({
    value: '', placeholder: 'Last Name', type: 'text', id: 'last-name',
  }),
  phone: appInput({
    value: '', placeholder: 'Phone', type: 'text', id: 'phone',
  }),
  pass: appInput({
    value: '', placeholder: 'Password', type: 'password', id: 'pass',
  }),
  passAgain: appInput({
    value: '', placeholder: 'Password (again)', type: 'password', id: 'pass-again',
  }),
  createBtn: appButton({ buttonText: 'Create account' }),
  loginLink: appLink({ to: '/login', linkText: 'Sign in', classes: '' }),
};

const methods = {
  registerPartials: () => {
    Handlebars.registerPartial('mail', components.mail);
    Handlebars.registerPartial('login', components.login);
    Handlebars.registerPartial('firstName', components.firstName);
    Handlebars.registerPartial('lastName', components.lastName);
    Handlebars.registerPartial('phone', components.phone);
    Handlebars.registerPartial('pass', components.pass);
    Handlebars.registerPartial('passAgain', components.passAgain);
    Handlebars.registerPartial('createBtn', components.createBtn);
    Handlebars.registerPartial('loginLink', components.loginLink);
  },
};

export const authForm = () => {
  methods.registerPartials();
  return Handlebars.compile(tmpl());
};
export const init = () => {

};
