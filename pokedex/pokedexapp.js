import Component from '../Component.js';
// import pokemons from '../data/pokemons.js'; 
import PokemonList from './PokemonList.js'; 
// import FilterPokemons from './FilterPokemons.js';
import Header from './Header.js';
import Paging from './Paging.js';
import { getPokemon } from '../services/pokedex-api.js';
import SearchOptions from './SearchOptions.js';


class App extends Component {

    // onRender(dom) {
    //     const header = new Header({
    //         person: 'Aaron',
    //     });
    //     const headerDOM = header.renderDOM();
    //     dom.prepend(headerDOM); 

    //     const props = {
    //         pokemons: pokemons
    //     };

    //     const pokemonList = new PokemonList(props);
    //     const imageListDOM = pokemonList.renderDOM();

    //     const listSection = dom.querySelector('.list-section');
    //     listSection.appendChild(imageListDOM);


    //     const filterPokemons = new FilterPokemons({
    //         pokemons: pokemons,
    //         onFilter: (pokemonKeywork) => {
    //             let filteredPokemon;
    //             if (!pokemonKeywork) {
    //                 filteredPokemon = pokemons;
    //             }
    //             else {
    //                 filteredPokemon = pokemons.filter(pokemon => {
    //                     return pokemon.keyword === pokemonKeywork;
    //                 });
    //             }

    //             const updateProps = { images: filteredPokemon };
    //             pokemonList.update(updateProps);
    //         }
    //     });

    //     const filterPokemonDOM = filterPokemons.renderDOM();

    //     const optionsSection = dom.querySelector('.options-section');
    //     optionsSection.appendChild(filterPokemonDOM);

    // }

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