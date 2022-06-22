import * as Handlebars from 'handlebars';
import tmpl from './appLink.hbs';
import Block from '../../../classes/Block';

interface LinkProps {
    to: string,
    linkText: string,
    classes: string,
}

export class AppLink extends Block {
  constructor(props: LinkProps) {
    super('a', props);
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}

const appLink = ({ to, linkText, classes }) => Handlebars.compile(tmpl({ to, linkText, classes }));

export default appLink;
