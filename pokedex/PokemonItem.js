import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
            <li class="pokemon-item">
                <div class="pokemon-name">
                <h2>${pokemon.name}</h2>
                <p class = 'pokemon-attack'>${pokemon.attack}</p>
                <p class = 'pokemon-defense'>${pokemon.defense}</p>
                <p class = 'pokemon-type'>${pokemon.pokebase}</p>
                <p class = 'pokemon-ability'>${pokemon.ability_1}</p>
            </div>
            <div class = 'image-container'>
                <img src = '${pokemon.url_image}'>
            </div>
            </li>
        `;
    }
}

export default PokemonItem;