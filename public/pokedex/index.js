import App from './pokedexapp.js';

const app = new App();
const dom = app.renderDOM();
document.body.prepend(dom);