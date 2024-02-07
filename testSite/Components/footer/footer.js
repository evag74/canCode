class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer>
        <img src="../Images/canCodePlain1.png" alt="logo of canCode" class='footer-logo'>
        <p>Fighting for a brighter tommorrow.</p>
        <div class="socialMediaList">
            <a href="https://www.instagram.com/cancodeus/" target="_blank"> <i class="fa-brands fa-instagram"></i> </a>
            <a href="https://www.facebook.com/cancodeus/" target="_blank"> <i class="fa-brands fa-facebook"></i> </a>
            <a href="https://www.twitter.com/cancodeus/" target="_blank"> <i class="fa-brands fa-twitter"></i> </a>
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

customElements.define('my-footer', MyFooter);
