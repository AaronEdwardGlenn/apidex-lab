import Component from '../public/Component.js/index.js';



class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
            <nav><a href="../index.html">__HOME__</a> <a href="../explore.html">__POKEDEX__</a> <nav>    
    <div id='intro'>This is the Pokedex! 
      
    </div>
<!--  
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
    
</div> -->
            </header>
        `;
    }
}

export default Header;