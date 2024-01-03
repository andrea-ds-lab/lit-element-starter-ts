import {LitElement, css, html} from 'lit';
import './dev/componets/my-paragraph';

export class LitApp extends LitElement {
  static properties = {
    name: {},
    colors: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: red;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';
    this.colors = ['red', 'green', 'blue'];
  }

  // Render the UI as a function of component state
  render() {
    var componentStyle =
      'padding: 1rem; border-radius: 8px; background-color : black';

    var mainPageStyle = `height: 100vh; display: flex; flex-direction: column; justify-content: center; padding-left: 7vw; background-size: cover; background-repeat: no-repeat; background-image: url("https://srvunicloud-prod.deltasystem.it/dianaweb/public/img_custom/wallpaper/wallpaper_unigea.png?reload=1704279551"`;

    var loginFormStyle =
      'display: flex; flex-direction: column; justify-content: center; gap: 1.5em; box-sizing: border-box; background-color: white; padding: 3em; box-shadow: var(--elevation-24dp); border-radius: 3px';

    return html`<div style=${mainPageStyle}>
      <div style="max-width: 30%">
        <div style=${loginFormStyle}>
          <input
            id="frm_1__hf0utnnme"
            name="hf0utnnme"
            type="text"
            class=""
            style="margin: 0; padding: 0.5em; font-size: 1.2em"
            placeholder="Username"
            value=""
            data-chg="1"
          />
          <input
            id="frm_1__hf0utnpsw"
            name="hf0utnpsw"
            type="password"
            class=""
            style="margin: 0; padding: 0.5em; font-size: 1.2em;m"
            placeholder="Password"
            value=""
            data-chg="1"
          />
          <div
            id="frm_1__hb0savebox"
            name="hb0savebox"
            style="display: flex; flex-direction: row; align-items: center; margin-top: 5em;"
          >
            <input
              id="frm_1__hb0save"
              name="hb0save"
              type="checkbox"
              class=""
              value="*on"
              style="font-size: 1.3em; margin: 4px; cursor: pointer"
            /><label
              id="frm_1__hb0savelbl"
              name="hb0savelbl"
              for="frm_1__hb0save"
              >Ricordami</label
            ><input
              id="frm_1__hb0token"
              name="hb0token"
              type="text"
              class="hidden"
              value=""
            />
          </div>
          <button
            id="frm_1__hf0btnlogin"
            name="hf0btnlogin"
            data-xdsc="LOGIN"
            class="frmbtnsbm frmbtntxt"
            type="button"
            value=""
            style="margin: 0; width: 100%; height: 2.5em;"
            title="LOGIN"
          >
            LOGIN
          </button>
        </div>
        <div style=${componentStyle}>
          <ul>
            ${this.colors.map(
              (color, index) =>
                html`<li style="  color: ${color}">${color} ${index}</li>`
            )}
          </ul>
        </div>
        <my-paragraph></my-paragraph>
      </div>
    </div>`;
  }
}
customElements.define('lit-app', LitApp);
