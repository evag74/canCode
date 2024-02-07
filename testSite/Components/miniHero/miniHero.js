class MiniHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class='mini-hero'>
                <div class='mini-hero--middle-text'>
                    <h3>Forging Futures</h3>
                </div>
            </header>
            `;
    }
}

customElements.define("my-mini-hero", MiniHero);
