import * as Handlebars from 'handlebars';
import tmpl from './appInput.hbs';
import Block from '../../../classes/Block';

const appInput = ({
  value, placeholder, type = 'text', id,
}) => Handlebars.compile(tmpl({
  value,
  placeholder,
  type,
  id,
}))({});

interface InputProps {
  value: any,
  placeholder: string,
  type: string,
  id: string
}

export class AppInput extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}

export default appInput;
