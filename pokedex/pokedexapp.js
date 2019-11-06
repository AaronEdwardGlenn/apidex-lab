import Component from '../Component.js';
import pokemons from '../data/pokemons.js'; 
import PokemonList from './PokemonList.js'; 
import FilterPokemons from './FilterPokemons.js';
import Header from './Header.js'; 

class App extends Component {

    onRender(dom) {
        const header = new Header({
            person: 'Aaron',
        });
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM); 

        const props = {
            pokemons: pokemons
        };

        const pokemonList = new PokemonList(props);
        const imageListDOM = pokemonList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);


        const filterPokemons = new FilterPokemons({
            pokemons: pokemons,
            onFilter: (pokemonKeywork) => {
                let filteredPokemon;
                if (!pokemonKeywork) {
                    filteredPokemon = pokemons;
                }
                else {
                    filteredPokemon = pokemons.filter(pokemon => {
                        return pokemon.keyword === pokemonKeywork;
                    });
                }

                const updateProps = { images: filteredPokemon };
                pokemonList.update(updateProps);
            }
        });

        const filterPokemonDOM = filterPokemons.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterPokemonDOM);

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