export class MemberCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class='members-card-div' >
                <img src="./Images/output-onlinetools.png" alt="">
                <div class="content-container">
                    <h4>High School Name</h4>
                    <h6>Full Name</h6>
                    <p class="description">Short Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur amet
                        deleniti quo similique voluptatibus soluta esse ipsa?</p>
                    <button class='button button-solid'>Learn More</button>
                </div>
            </div>
            `;
    }


    static createMemberCard(membersContainer, teamData) {
        const newCard = document.createElement("my-member-card");
        const { Position, Name, Description, Picture } = teamData;
        membersContainer.appendChild(newCard);

        newCard.querySelector("h4").innerText = `${Position}`;
        newCard.querySelector("h6").innerText = `${Name}`;
        newCard.querySelector("p").innerText = `${Description}`;
        newCard.querySelector("img").src = `${Picture}`;

        return newCard;
    }
}

customElements.define('my-member-card', MemberCard);
