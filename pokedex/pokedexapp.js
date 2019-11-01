import Component from '../componant.js';

class PokedexApp extends Component {

    async onRender(elmt){
        const pokedexHeader = new Header(); 
        elmt.prepend(pokedexHeader.renderDOM);
    }

    renderHTML() {
        return /*html*/ `   
        
        <div>

        
        
        </div>

        `;
    }

}


export default Component; 