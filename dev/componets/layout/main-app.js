import {LitElement, css, html} from 'lit';

export class MainApp extends LitElement {
  // Render the UI as a function of component state
  render() {
    return html`<div>Here the content</div>`;
  }
}
customElements.define('main-app', MainApp);
