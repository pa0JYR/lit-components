import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-header")
export class MyHeader extends LitElement {
  static styles = css`
    header {
      background-color: rgb(236, 222, 225);
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border: solid;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Mi Encabezado</h1>
      </header>
    `;
  }
}