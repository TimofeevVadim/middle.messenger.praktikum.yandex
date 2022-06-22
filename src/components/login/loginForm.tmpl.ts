import * as Handlebars from 'handlebars';
import { log } from 'handlebars';
import tmpl from './loginForm.hbs';
import appInput, { AppInput } from '../common/appInput/appInput.tmpl';
import appButton, { AppButton } from '../common/app-button/appButton.tmpl';
import appLink, { AppLink } from '../common/app-link/appLink.tmpl';
import Block from '../../classes/Block';

export class LoginForm extends Block {
  constructor() {
    super('div');
  }

  protected initChildren() {
    this.children.createAcc = new AppLink({
      to: '#',
      linkText: 'hey link',
      classes: '',
    });
    this.children.loginBtn = new AppButton({
      buttonText: 'button',
      events: {
        click: () => console.log('het'),
      },
    });
    this.children.loginInput = new AppInput({
      value: '',
      placeholder: 'string',
      type: 'string',
      id: 'string',
    });
    this.children.passwordInput = new AppInput({
      value: '',
      placeholder: 'string',
      type: 'string',
      id: 'string',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}

const data = {
  login: '',
  password: '',
};

const components = {
  loginInput: appInput({ value: data.login, placeholder: 'Login', id: 'login' }),
  passwordInput: appInput({
    value: data.password, placeholder: 'Password', id: 'password', type: 'password',
  }),
  loginBtn: appButton({ buttonText: 'Sign in' }),
  appLink: appLink({ to: '/auth', linkText: 'Create Account', classes: '' }),
};

const methods = {
  registerPartials: () => {
    Handlebars.registerPartial('loginInput', components.loginInput);
    Handlebars.registerPartial('passwordInput', components.passwordInput);
    Handlebars.registerPartial('loginBtn', components.loginBtn);
    Handlebars.registerPartial('createAcc', components.appLink);
  },
  registerHelpers: () => {
    Handlebars.registerHelper('click', () => {
      console.log('click');
    });
  },
  oninput: (e) => {
    data[e.target.id] = e.target.value;
  },
  click: () => {
    console.log(data, 'data');
    window.location.replace('/chats');
  },
};

export const loginForm = () => {
  methods.registerHelpers();
  methods.registerPartials();
  return Handlebars.compile(tmpl());
};
export const init = () => {
  const login = document.getElementById('login');
  const password = document.getElementById('password');
  const button = document.getElementById('button');

  login.oninput = methods.oninput;
  password.oninput = methods.oninput;
  button.onclick = methods.click;
};
