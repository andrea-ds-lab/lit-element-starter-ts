import {LitElement, html} from 'lit';
import {observeState} from 'lit-element-state';
import {myState} from './my-state';

class MyParagraph extends observeState(LitElement) {
  connectedCallback() {
    super.connectedCallback();
    this.requestUpdate();
  }

  static properties = {
    contextText: {},
  };

  render() {
    return html`<p>This is my paragraph</p>
      <h1>Counter: ${myState.counter}</h1>
      <button @click=${() => myState.counter++}></button> `;
  }
}
customElements.define('my-paragraph', MyParagraph);
