import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
    .alinear-centro{
    justify-content:center;
    }
    .container-button {
      padding: 7px;
      background-color: #eb3c3c;
      color: rgb(236, 222, 225);
      border-radius: 3px;
      border-color: #eb3c3c;
      width: 100%;
      justify-content: center;
    }
    .container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background-color: rgb(236, 222, 225);
      padding: 25px;
      border-radius: 30px;
      width: 500px;
    }
    
  .inputs{
    display:flex;
    justify-content: space-between;
    }
  input{
    margin-left: 16px;
    }
  
  `;

  @property()
  private mensajeBienvenida = "";

  private cargarPagina(event: Event) {
    event.preventDefault(); // Evita que el formulario se envíe
    const user = this.renderRoot.querySelector<HTMLInputElement>("#username");
    const pass = this.renderRoot.querySelector<HTMLInputElement>("#password");
    if (user && pass) {
      /* Credenciales que proporciona el usuario */
      const username = user.value;
      const password = pass.value;
      console.log("Usuario:", username);
      console.log("Contraseña:",password);   
      /* Credenciales almacenadas en localStorage */
      const usernameLocal = localStorage.getItem("email");
      const passwordLocal = localStorage.getItem("password"); 
      console.log("Usuario LocalStorage:", usernameLocal);
      console.log("Contraseña LocalStorage:",passwordLocal);    
      if (username === usernameLocal && password === passwordLocal) {
        this.mensajeBienvenida = `¡Hola!, ingresaste las credenciales correctas`;
      }else{
        this.mensajeBienvenida = `ingresaste las credenciales no son correctas`;
      }
      
    }
  }

  render() {
    return html`
      <div class="container">
        <h2>Iniciar Sesión</h2>
        <form @submit=${this.cargarPagina}>
          <div class="inputs">
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required placeholder="Nombre de usuario" />
          </div>
          <br>
          <div class="inputs">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required placeholder="Contraseña" />
          </div>
          <br>
          <div class="alinear-centro">
            <button class="container-button" type="submit">Iniciar sesión</button>
          </div>
        </form>
        ${this.mensajeBienvenida ? html`<p>${this.mensajeBienvenida}</p>` : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
