import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./header"
import "./footer"
import "./body"

@customElement("my-page")
export class MyPage extends LitElement {
  
static styles = css`
.container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  justify-content: space-around;
  }
  

`;
  render() {
    return html`
    <div class = "container">
      <my-header></my-header>
      <my-body></my-body>
      <my-footer></my-footer>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-page": MyPage;
  }
}