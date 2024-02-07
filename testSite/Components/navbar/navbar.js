class MyNavbar extends HTMLElement {
     connectedCallback() {
        this.innerHTML = `
        <nav>
            <div class='navbar-left'>
                <img src="../Images/canCodePlain1.png" alt="logo of canCode" class='navbar-left--logo'>
            </div>

            <ul class='navbar-middle'>
                <li class="navbar--link"> <a href="./index.html">Home</a> </li>
                <li class="navbar--link"> <a href="./team.html">Team</a> </li>
                <li class="navbar--link"> <a href="./sponsors.html">Sponsors</a> </li>
                <li class="navbar--link"> <a href="./events">Events</a> </li>
            </ul>

            <div class="navbar-right">
                <button type="button" class="button-navbar button-solid">Contribute</button>
                <button type="button" class="button-navbar button-clear">Search</button>

            </div>
        </nav>
            `
    }
}

customElements.define('my-navbar', MyNavbar);
