class AchievementBox extends HTMLElement {
    static observedAttributes = ["data-value", "data-limit", "name", "fa-icon"];

    connectedCallback() {
        const percentage = Math.ceil(this.getAttribute('data-value') / this.getAttribute('data-limit') * 100);
        console.log(percentage);
        this.innerHTML = `
            <div class="achievement-box">
                <div class="achievement-circle-progressBar circle-progressBar-animation" style="--circle-percent: ${percentage}%;">
                    <div class="achievement-icon-container">
                        <i class="achievement-icon fa-solid ${this.getAttribute('fa-icon')}"></i>
                    </div>
                </div>
                <h3 class="running-numbers" data-limit="${this.getAttribute('data-limit')}" data-value="${this.getAttribute('data-limit')}">0</h3>
                <p>Sites</p>
            </div>
            `;
    }
}

customElements.define("my-achievement-box", AchievementBox);
