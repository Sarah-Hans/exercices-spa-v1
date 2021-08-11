import { Element } from './frameworkTypes';

// parent class for components
abstract class Component {
  abstract render(): Element // la fonction rend un objet de type Element
}

function createElement(name, attributes, children) {
  return {
    name,
    attributes,
    children
  }
}

function start(rootComponent, rootHtml: HTMLElement): void {
  const rootInstance = new rootComponent();
  const rootRender = rootInstance.render();
  console.log(rootInstance);
}

export {
  Component,
  start, createElement
};