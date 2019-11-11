import Component from '../Component.js';

import PokemonList from './PokemonList.js'; 
import Header from './Header.js';
import Paging from './Paging.js';
import { getPokemon } from '../services/pokedex-api.js';
import SearchOptions from './SearchOptions.js';



class App extends Component {

    
    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const searchSection = dom.querySelector('.list-section');
        const searchOptions = new SearchOptions();
        searchSection.prepend(searchOptions.renderDOM());

        const listSection = dom.querySelector('.images');
        const paging = new Paging({ totalResults: 0 });
        listSection.appendChild(paging.renderDOM());

        const pokemonList = new PokemonList({ pokemon: [] });
        listSection.appendChild(pokemonList.renderDOM());

        async function loadPokemon() {
            const response = await getPokemon();
            const pokemon = response.results;
            const totalResults = response.count;
            pokemonList.update({ pokemon: pokemon });
            paging.update({ totalResults: totalResults });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <section class="options-section">

                    </section>
                    <section class="list-section"> 
                        
                    </section>
                    <ul class="images">
            </ul>
                </main>
            </div>
        `;
    }
}

export default App;