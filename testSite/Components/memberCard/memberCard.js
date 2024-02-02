class MemberCard extends HTMLElement { connectedCallback() {
        this.innerHTML = `
            <div class='members-card-div' >
                <img src="./Images/output-onlinetools.png" alt="">
                    <h4>High School Name</h4>
                    <h6>Full Name</h6>
                    <p>Short Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur amet
                        deleniti quo similique voluptatibus soluta esse ipsa?</p>
                    <button class='button button-solid'>Learn More</button>
                </div>
            `;
    }
}

customElements.define('my-member-card', MemberCard);
