import {LitElement, css, html} from 'lit';
import './dev/componets/my-paragraph';

export class LitApp extends LitElement {
  static properties = {
    username: {},
    password: {},
    rememberMe: {state: false},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: black;
    }
    .input:hover {
      box-shadow: rgb(251, 196, 79) 0em 0em 5px;
      outline: 0;
    }

    .input[readonly]:hover {
      box-shadow: rgb(174, 198, 221) 0em 0em 5px;
    }

    .input[type='checkbox']:hover {
      box-shadow: rgb(0, 128, 128) 0em 0em 5px;
    }

    .input[type='checkbox'][disabled]:hover {
      box-shadow: rgb(0, 0, 0) 0em 0em 5px;
    }

    /* BUTTON */
    button:not([disabled]):not(.appbtn):not(.tlbbtn):hover {
      box-shadow: rgb(0, 128, 128) 0em 0em 5px;
    }

    button[disabled]:hover {
      box-shadow: rgb(0, 0, 0) 0em 0em 5px;
    }

    .tlbbox:hover {
      background-color: whitesmoke;
    }

    /* TAB BUTTON */
    button.appbtn:not(.appbtnopn):hover {
      background-color: lightgrey;
    }

    /* MENU BUTTON */
    button.dktmnubtn:hover {
      background-color: lightgrey;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.username = '';
    this.password = '';
    this.rememberMe = false;
  }

  _usernameChanged(e) {
    this.username = e.target.value;
  }

  _passwordChanged(e) {
    this.password = e.target.value;
  }

  _submitCredentials() {
    console.log('username: %s, psw: %s', this.username, this.password);
  }

  _invertRememberMe(e) {
    this.rememberMe = !this.rememberMe;
    console.log(this.rememberMe);
  }

  // Render the UI as a function of component state
  render() {
    var mainPageStyle = `height: 100vh; display: flex; flex-direction: column; justify-content: center; padding-left: 7vw; background-size: cover; background-repeat: no-repeat; background-image: url("https://srvunicloud-prod.deltasystem.it/dianaweb/public/img_custom/wallpaper/wallpaper_unigea.png?reload=1704279551"`;

    var loginFormStyle =
      'display: flex; flex-direction: column; justify-content: center; gap: 1.5em; box-sizing: border-box; background-color: white; padding: 3em; box-shadow: var(--elevation-24dp); border-radius: 3px';

    return html`<div style=${mainPageStyle}>
      <div style="max-width: 30%">
        <div style=${loginFormStyle}>
          <div
            style="display: flex; align-items: center; justify-content: center; margin-bottom: 16px"
          >
            <img style="max-width: 30%" src="./images/logo_unigea_small.png" />
          </div>

          <input
            id="frm_1__hf0utnnme"
            name="hf0utnnme"
            type="text"
            class="input"
            @input=${this._usernameChanged}
            style="margin: 0; padding: 0.5em; font-size: 1.2em"
            placeholder="Username"
            value=""
            data-chg="1"
          />
          <input
            id="frm_1__hf0utnpsw"
            name="hf0utnpsw"
            type="password"
            class="input"
            @input=${this._passwordChanged}
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
              class="input"
              @click=${this._invertRememberMe}
              value="*on"
              style="font-size: 1.3em; margin: 4px; cursor: pointer"
            /><label
              id="frm_1__hb0savelbl"
              name="hb0savelbl"
              for="frm_1__hb0save"
              >Ricordami</label
            >
          </div>
          <button
            id="frm_1__hf0btnlogin"
            name="hf0btnlogin"
            data-xdsc="LOGIN"
            class="frmbtnsbm frmbtntxt"
            type="button"
            value=""
            @click=${this._submitCredentials}
            style="margin: 0; width: 100%; height: 2.5em; font-weight: bold; color: white; background: rgb(2, 102, 204)"
            title="LOGIN"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>`;
  }
}
customElements.define('lit-app', LitApp);
