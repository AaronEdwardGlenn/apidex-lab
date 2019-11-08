import Component from '../Component.js';
// import pokemons from '../data/pokemons.js'; 
import PokemonList from './PokemonList.js'; 
// import FilterPokemons from './FilterPokemons.js';
import Header from './Header.js';
import Paging from './Paging.js';
import { getPokemon } from '../services/pokedex-api.js';
import SearchOptions from './SearchOptions.js';


class App extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');

        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const listSection = dom.querySelector('.list-section');

        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokemonList = new PokemonList({ pokemon: [] });
        listSection.appendChild(pokemonList.renderDOM());

        const pokemon = await getPokemon();
        const results = pokemon.results;

        pokemonList.update({ pokemon: results });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <section class="options-section">

                    </section>
                    <section class="list-section"> 
                        
                    </section>
                </main>
            </div>
        `;
    }
}

export default App;