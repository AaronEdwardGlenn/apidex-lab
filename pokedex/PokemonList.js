import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {

    renderHTML() {
        return /*html*/`
            <ul class="images"></ul>
        `;
    }

    onRender(dom) {
        const pokemons = this.props.pokemons;

        pokemons.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokemonItem = new PokemonItem(props);
            const pokemonItemDOM = pokemonItem.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });
    }
}

export default PokemonList;