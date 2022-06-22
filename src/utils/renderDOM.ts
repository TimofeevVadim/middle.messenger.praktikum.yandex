import Block from '../classes/Block';

export default function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);

  if (!root) {
    throw new Error('Root nit found');
  }

  root.innerHTML = '';

  root.append(component.getContent());
}
