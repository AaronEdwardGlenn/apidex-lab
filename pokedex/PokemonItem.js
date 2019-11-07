import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const { pokemon: {
            pokemon,
            color_1,
            ability_1,
            url_image,
            pokebase,
            shape,
        },
        } = this.props;





        return /*html*/`
            <li class="pokemon-item" style = "background-color: ${color_1}">
            <h2>
                    <a href=${pokemon}>
                        ${ability_1}
                    </a>
                </h2>
                <img 
                    src="${url_image}"
                    alt="${pokebase}"
                >
                <time>${shape}</time>
            </li>
        `;
    }
}


export default PokemonItem;