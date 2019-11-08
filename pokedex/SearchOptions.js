import Component from '../Component.js';

class SearchOptions extends Component {

    renderHTML() {
        return /*html*/`
            <div>
                <form class="search">
                    <p>Search For:</p>
                    <input name="search">
                    <button>Search!</button>
                </form>
                <fieldset class="type">
                    <label>
                        <input type="radio" name="type" value="attack" checked>
                        attack
                    </label>
                    <label>
                        <input type="radio" name="type" value="defense">
                        defense
                    </label>
                    <label>
                        <input type="radio" name="type" value="eggType">
                        eggType
                    </label>
                </fieldset>
            </div>
        `;
    }
}

export default SearchOptions;