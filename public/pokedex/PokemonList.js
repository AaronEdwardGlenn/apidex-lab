import Component from '../Component.js';
import PokemonItem from './PokemonItem.js.js';

class PokemonList extends Component {

    
    onRender(dom) {
        const pokemon = this.props.pokemon;

        pokemon.forEach(pokes => {
            const props = { pokes };
            const pokemonItem = new PokemonItem(props);
            const pokemonItemDOM = pokemonItem.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });

    }
    renderHTML() {
        
        return /*html*/`
            <ul class="pokemons"></ul>
        `;
    }
}


export default PokemonList;