import component from './'
class Header extends Component {
    renderHtml(){
        return /*html*/ `
        <header class = 'header'>
            <nav class = 'main-nav'>
                <div class = 'nav-home'><a href = ''>Home</div>
                <div class = 'nav-explore'><a href = ''>Exlore</div>
            </nav>
            <h1> POKEMON DEXXXX </h1>
        </header>
        
        `;
    }
}
export default Header; 