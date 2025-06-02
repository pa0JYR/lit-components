import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
interface IPokemonResponse{
    name?: string;
    url?: string;
}

@customElement("my-body")
export class MyBody extends LitElement {
  static styles = css`
    section {
      padding: 10px;
      background-color: rgb(236, 222, 225);
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .container-button {
      padding: 7px;
      background-color: #eb3c3c;
      color: rgb(236, 222, 225);
      border-radius: 3px;
      border-color: #eb3c3c;
      
      justify-content: center;
      margin: 3px;
    }
  `;
@property({type: Array})
    lista_pokemones : IPokemonResponse[] = [];
@property()
    pokemonResponse: IPokemonResponse= {};

    getInfo = () => {
      fetch("https://pokeapi.co/api/v2/pokemon",{
        method: "GET",
      })
      .then((response) => response.json())
      .then((data) => {
        this.lista_pokemones = data.results;})
      .catch((error) => {
        console.error("Error al obtener los datos:", error);});
    }
    constructor(){
        super();
        this.getInfo();
    }
    
  render() {
    return html`
      <section>
        <h1>Lista de pokemones</h1>
        <ul>
        ${this.lista_pokemones.map(
          (pokemon) => html`
          <button class="container-button" @click=${() => {
            if (pokemon.url) {
              window.location.href = pokemon.url;
            } else {
              console.warn("URL no disponible para este Pokémon");
            }
          }}>${pokemon.name}</button>        
          `)}
        </ul>
      </section>
    `;
  }
}