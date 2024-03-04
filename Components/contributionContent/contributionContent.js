class contributionContent extends HTMLElement {

    connnectedCallback() {
        this.innerHTML = `
            <div class="contribution-content">
                <div class="contribution-img-container">
                    <img class="contribution-img" src="../../Images/eva.jpg" alt="image of eva">
                </div>
                <h3>Eva Gottsfeld</h3>
                <p class="contribution-quote">
                    THEY GAVE ME COMMUNITY SERVICE HOURS!
                </p>
            </div>
            `;
    }

    static createContributionContent(membersContainer, teamData) {
        const newContrib = document.createElement("my-member-card");
        const { Name, Quote, Picture } = contribData;
        membersContainer.appendChild(newContrib);

        newContrib.querySelector("h3").innerText = `${Name}`;
        newContrib.querySelector("p").innerText = `${Quote}`;
        newContrib.querySelector("img").src = `${Picture}`;

        return newContrib;

    }

}
