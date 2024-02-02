class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer>
        <img src="../Images/canCodePlain1.png" alt="logo of canCode" class='footer-logo'>
        <p>Fighting for a brighter tommorrow.</p>
        <div class="socialMediaList">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
        </div>
        <div class="copyright--Container">
            <p>
                Copyright © canCode 2023
            </p>
        </div>
    </footer>
    `;
    }
}

customElements.define('my-footer', Footer);
