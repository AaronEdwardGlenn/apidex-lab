import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
            <li class="pokemon-item" style = "background-color: ${pokemon.color_1}">
                <div class="pokemon-name" >
                <h2>${pokemon.name}</h2>
                <p class = 'pokemon-type'>Egg Group: ${pokemon.egg_group_1}</p>
                <p class = 'pokemon-attack'>Attack: ${pokemon.attack}</p>
                <p class = 'pokemon-defense'>Defense: ${pokemon.defense}</p>
                <p class = 'pokemon-ability'>Ability: ${pokemon.ability_1}</p>
            </div>
            <div class = 'image-container'>
                <img src = '${pokemon.url_image}'>
            </div>
            </li>
        `;
    }
}

export default PokemonItem;