import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {

    
    onRender(dom) {
        const { pokemon } = this.props;

        pokemon.forEach(pokemon => {
            const pokemonItem = new PokemonItem({ pokemon });
            const pokemonItemDOM = pokemonItem.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });
    }
    renderHTML() {
        return /*html*/`
            <ul class="images"></ul>
        `;
    }

}

export default PokemonList;