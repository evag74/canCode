export class ImageContentLayout extends HTMLElement {
    static observedAttributes = ["image1", "image2", "section", "title", "description", "buttonContent", "altLayout"];

    connectedCallback() {
        if (!this.getAttribute("altLayout")) {
            this.innerHTML = `
    <section class="img-content-layout">
        <div class="">
            <div class="image-container">
                <img src="${this.getAttribute("image1")}" alt="" class="base-image">
                <img src="${this.getAttribute("image2")}" alt="" class="top-image">
            </div>
        </div>

        <div class="text-block">
            <h4 class="layout-section">${this.getAttribute("section")}</h4>
            <hr>
            <h2 class="layout-title">${this.getAttribute("title")}</h2>
            <p class="layout-description">${this.getAttribute("description")}</p>
            <button class="layout-button button-solid">${this.getAttribute("buttonContent")}</button>
        </div>
    </section>
            `
        } else {
            this.innerHTML = `
    <section class="img-content-layout">

        <div class="text-block">
            <h4 class="layout-section">${this.getAttribute("section")}</h4>
            <hr>
            <h2 class="layout-title">${this.getAttribute("title")}</h2>
            <p class="layout-description">${this.getAttribute("description")}</p>
            <button class="layout-button button-solid">${this.getAttribute("buttonContent")}</button>
        </div>
        <div class="">
            <div class="image-container">
            <img src="${this.getAttribute("image1")}" alt="" class="base-image">
            <img src="${this.getAttribute("image2")}" alt="" class="top-image">
            </div>
        </div>
    </section>
                `;
        }
    }

    static createSiteLayout(siteContainer, siteData) {
        const newSite = document.createElement("my-image-content-layout");
        const { Description, Image1, Image2, Image1Description, Image2Description, Name, Link } = siteData;
        siteContainer.appendChild(newSite);

        newSite.querySelector(".layout-section").innerHTML = `Sites`;
        newSite.querySelector(".layout-title").innerHTML = `${Name}`;
        newSite.querySelector(".layout-description").innerHTML = `${Description}`;
        newSite.querySelector(".base-image").setAttribute("src", `${Image1}`);
        newSite.querySelector(".base-image").setAttribute("alt", `${Image1Description}`);
        newSite.querySelector(".top-image").setAttribute("src", `${Image2}`);
        newSite.querySelector(".top-image").setAttribute("alt", `${Image2Description}`);
        newSite.querySelector(".layout-button").innerHTML = `Learn More`;
        newSite.querySelector(".layout-button").addEventListener("click", () => window.open(`${Link}`, `_blank`));

        return newSite;
    }

}

customElements.define("my-image-content-layout", ImageContentLayout);
