export class ContributionContent extends HTMLElement {
  connectedCallback() {
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

  static createContributionContent(contributionContainer, contributionData) {
    const newContrib = document.createElement("my-contribution-content");
    const { Name, Quote, Picture } = contributionData;
    contributionContainer.appendChild(newContrib);

    newContrib.querySelector("h3").innerText = `${Name}`;
    newContrib.querySelector("p").innerText = `${Quote}`;
    newContrib.querySelector("img").src = `${Picture}`;

    return newContrib;
  }
}

customElements.define("my-contribution-content", ContributionContent);
