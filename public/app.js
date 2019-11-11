import Header from './pokedex/Header.js.js';
import Component from './Component.js';

class Cool extends Component{
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default Cool; 




