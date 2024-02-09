class ImageContentLayout extends HTMLElement {
    static observedAttributes = ["image1", "image2", "section", "title", "description", "buttonContent", "altLayout"];

    connectedCallback() {
        if (!this.getAttribute("altLayout")) {
            this.innerHTML = `
    <section class="img-content-layout">
        <div class="">
            <div class="image-container">
                <img src="${this.getAttribute("image1")}" alt="" class="base-image">
                <img src="${this.getAttribute("image2")}" class="top-image">
            </div>
        </div>

        <div class="text-block">
            <h4>${this.getAttribute("section")}</h4>
            <hr>
            <h2>${this.getAttribute("title")}</h2>
            <p>${this.getAttribute("description")}</p>
            <button class="button-solid">${this.getAttribute("buttonContent")}</button>
        </div>
    </section>
            `
        } else {
            this.innerHTML = `
    <section class="img-content-layout">

        <div class="text-block">
            <h4>${this.getAttribute("section")}</h4>
            <hr>
            <h2>${this.getAttribute("title")}</h2>
            <p>${this.getAttribute("description")}</p>
            <button class="button-solid">${this.getAttribute("buttonContent")}</button>
        </div>
        <div class="">
            <div class="image-container">
            <img src="${this.getAttribute("image1")}" alt="" class="base-image">
            <img src="${this.getAttribute("image2")}" class="top-image">
            </div>
        </div>
    </section>
                `;
        }
    }

}

customElements.define("my-image-content-layout", ImageContentLayout);
