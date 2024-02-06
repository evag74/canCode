//for slide information
/**
    * Create new memberCard element
    * @constructor
    * @param {json} teamData
    * @return {element} newCard
    */
function createMemberCard(teamData) {
    const { highSchool, name, description } = teamData;
    const newCard = document.createElement("div", { is: "my-member-card" });
    newCard.querySelector("h4").innerHTML(`${highSchool}`);
    newCard.querySelector("h6").innerHTML(`${name}`);
    newCard.querySelector("p").innerHTML(`${description}`);

    return newCard;
}

let teamArr;

fetch('./teamData.json')
    .then((response) => {
        if (!response.ok) {
            throw Error("Response not ok");
        }
        return response.json
    })
    .then(json => {
        teamArr = JSON.parse(json).map(obj => new TeamMember(obj.HighSchool, obj.Name, obj.Description));
    })
    .then(function() { // IIFE to not pollute namespace
        // Initialize TeamMember Arr from JSON file.
        const membersContainer = document.getElementById("members-container");
        teamArr.forEach(member => {
            console.log(createMemberCard(member));
            membersContainer.appendChild(createMemberCard(member));
        });

        // All startup functionality goes into this function.
        // Triggered when page loads
        window.addEventListener('load', function() {
        })
    });
