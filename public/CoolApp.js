import Cool from './app.js'; 

const app = new Cool(); 
const dom = app.renderDOM(); 
document.body.prepend(dom); 