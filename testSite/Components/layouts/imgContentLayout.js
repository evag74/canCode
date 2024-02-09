class ImageContentLayout extends HTMLElement {
    static observedAttributes = ["image1", "image2", "section", "title", "description", "buttonContent"];

    connectedCallback() {
        this.innerHTML = `
    <section class="img-content-layout">
        <div class="aboutUs-left">
            <div class="image-container">
                <img src="Images/students1.jpg" alt="" class="base-image">
                <img src="Images/students2.jpg" class="top-image">
            </div>
        </div>

        <div class="text-block">
            <h4>About Us</h4>
            <hr>
            <h2>Your support is really poweful</h2>
            <p>canCode is a group of high school students in Palm Beach County, Florida, committed to teaching
                elementary
                school students computer programming through engaging workshops.</p>
            <button class="button-solid">Read more</button>
        </div>
    </section>
            `
    }

    attributeChangedCallback(image1, image2, section, title, description, buttonContent) {
        this.innerHTML = `
    <section class="img-content-layout">
        <div class="">
            <div class="image-container">
                <img src="${image1}" alt="" class="base-image">
                <img src="${image2}" class="top-image">
            </div>
        </div>

        <div class="text-block">
            <h4>${section}</h4>
            <hr>
            <h2>${title}</h2>
            <p>${description}</p>
            <button class="button-solid">${buttonContent}</button>
        </div>
    </section>
            `
    }

}

customElements.define("my-image-content-layout", ImageContentLayout);
