// start of populating tables
function createMemberCard(membersContainer) {
    const newCard = document.createElement("div", { is: "my-member-card" });
    return membersContainer.appendChild(newCard);
}

function populateMemberCard(newCard, teamData) {
    const { HighSchool, Name, Description } = teamData;
    newCard.querySelector("h4").innerText = `${HighSchool}`;
    newCard.querySelector("h6").innerText = `${Name}`;
    newCard.querySelector("p").innerText = `${Description}`;
    newCard.querySelector(".members-card-div").classList.remove("active");
}

//it has to be async due to fetch, sucks...
(async function() {
    try {
        const response = await fetch('./teamData.json')
        if (!response.ok) {
            throw Error("Response not ok");
        }

        const json = await response.json();

        // Initialize TeamMember Arr from JSON file.
        const membersContainer = document.body.querySelector(".members-carousel");
        json.forEach(memberData => {
            populateMemberCard(createMemberCard(membersContainer), memberData);

        });
    }
    catch (error) {
        console.log(error);
    }

    // start of button interactity
    const nextBtn = document.getElementById("team-arrow--right");
    const prevBtn = document.getElementById("team-arrow--left");
    let index = 0;

    // TODO: the classes for elements inside the array aren't changing, could be
    // due to it not being HTMLCollect or b/c it's converted to an array.
        // Look to progressBars.js for proper implementation.
    const cardsArr = Array.from(document.getElementsByClassName("members-card-div"));

    function move(change) {
        index += change;

        if (index < 0) {
            index = cardsArr.length - 5;
        } else if (index + 4 >= cardsArr.length) {
            index = 0;
        } else {
        // TODO: this pieces should add one active tag to the end jel,
        // and remove a tag from the first.
            if (change == 1) {
            } else if (change == -1) {
            }
        }
    }
    move(0);

    nextBtn.addEventListener("click", () => move(1));
    prevBtn.addEventListener("click", () => move(-1));
})();
