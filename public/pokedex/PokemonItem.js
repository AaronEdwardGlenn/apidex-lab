import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokes = this.props.pokes;



        return /*html*/`
            <li class="pokemon-item" style = "background-color: ${pokes.color_1}">
            <h2>
                    <a href=${pokes.pokedex}>
                        ${pokes.pokebase}
                    </a>
                </h2>
                <img 
                    src="${pokes.url_image}"
                    alt="${pokes.ability_1}"
                >
                <h2>ability: ${pokes.ability_1}</h2>
                <h3>attack: ${pokes.attack} || defence: ${pokes.defense}</h3>
                <time>${pokes.shape}</time>
            </li>
        `;
    }
}


export default PokemonItem;