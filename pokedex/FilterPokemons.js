import Component from '../Component.js';

class FilterPokemons extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('change', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        return /*html*/`
            <select class="pokemon-type-filter">
            <option value ='pokemon-name' selected>Pokemon name</option>
        <option value ='pokemon-type'>Type</option>
        <option value ='pokemon-attack'>Attack</option>
        <option value ='pokemon-defense'>Defence</option>
        <option value ='pokemon-ability'>Ability</option>
        `;
    }
}

export default FilterPokemons;