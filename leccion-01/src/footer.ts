import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-footer")
export class MyFooter extends LitElement {
  static styles = css`
    footer {
      background-color: rgb(236, 222, 225);
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border: solid;
      width: 100%;
    }
  `;

  render() {
    return html`
      <footer>
        <h1>Mi Pie de pagina</h1>
        <p>Nombre: Paola Jaqueline Yebra Rivero :) 
      </footer>
    `;
  }
}