import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
            
    <div id='intro'> <span id='logo'>🐙</span>This is the Pokedex! </div>
    <div class = 'main-head'>
    <div class = 'nav'>
        <select>
            <option value ='name'>Pokemon name</option>
            <option value ='type'>Type</option>
            <option value ='attack'>Attack</option>
            <option value ='defence'>Defence</option>
            <option value ='eggGroups'>eggGroups</option>
        </select>
        </div>
    </div>

<div class = 'searches'>
    <input value='search bar'>
    <button id= 'search-bar' value='search-button'>search!</button>
    <input value = 'attack minimum value'>
    <button id= 'minimum-search-bar' value='search-button'>search!</button>
</div>

<div class = 'radios'>
    <div>
    <input type="radio" name="radio1" value="type1">Fast pokemans
    </div>
    <div>
    <input type="radio" name="radio1" value="type2">Slow pokemans
    </div>
</div>
            </header>
        `;
    }
}

export default Header;