import * as Handlebars from 'handlebars';
import tmpl from './appButton.hbs';
import Block from '../../../classes/Block';

interface ButtonProps {
  buttonText: string,
  events: object
}

export class AppButton extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}

const appButton = ({ buttonText }) => Handlebars.compile(tmpl({ buttonText }))({});

export default appButton;
