import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const { pokemon: {
            pokedex,
            color_1,
            ability_1,
            url_image,
            pokebase,
            shape,
            attack, 
            defense,
        },
        } = this.props;





        return /*html*/`
            <li class="pokemon-item" style = "background-color: ${color_1}">
            <h2>
                    <a href=${pokedex}>
                        ${pokebase}
                    </a>
                </h2>
                <img 
                    src="${url_image}"
                    alt="${ability_1}"
                >
                <h2>ability: ${ability_1}</h2>
                <h3>attack: ${attack} || defence: ${defense}</h3>
                <time>${shape}</time>
            </li>
        `;
    }
}


export default PokemonItem;