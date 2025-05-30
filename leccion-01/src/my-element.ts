import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
    button{
      padding: 7px;
      background-color: #eb3c3c;
      color: rgb(236, 222, 225);
      border-radius: 3px;
      border-color: #eb3c3c;
      display: block;
      margin-left: auto;
      margin-right: auto

    }
      .container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: rgb(236, 222, 225);
        padding: 25px;
        border-radius: 30px;
      }
  `;

  @property()
  name = "";

  render() {
    return html`
    <div class="container">
        <h2>Iniciar Sesión</h2>
        <form action="login" method="post">
          <label for="username">Usuario:</label>
          <input type="text" id="username" name="username" required placeholder="Nombre de usuario"><br><br>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" required placeholder="Contraseña"><br><br>

          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}