import {LitElement, css, html} from 'lit';
import './dev/componets/my-paragraph';

export class LitApp extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: orange;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';
  }

  // Render the UI as a function of component state
  render() {
    return html` <div>
      <p>Hello, ${this.name}!</p>
      <slot></slot>
      <my-paragraph></my-paragraph>
      <
    </div>`;
  }
}
customElements.define('lit-app', LitApp);
