// start of populating tables
function createMemberCard(membersContainer) {
    const newCard = document.createElement("my-member-card");
    return membersContainer.appendChild(newCard);
}

function populateMemberCard(newCard, teamData) {
    const { Position, Name, Description, Picture } = teamData;
    newCard.querySelector("h4").innerText = `${Position}`;
    newCard.querySelector("h6").innerText = `${Name}`;
    newCard.querySelector("p").innerText = `${Description}`;
    newCard.querySelector("img").src = `${Picture}`;
}

async function getMembers(filePath) {
    const response = await fetch(`${filePath}`)
    if (!response.ok) {
        throw Error("Response not ok");
    }

    return response.json();
}

//it has to be async due to fetch, sucks...
(async function() {
    try {
        const membersJson = await getMembers("./teamData.json");

        // Initialize TeamMember Arr from JSON file.
        const membersContainer = document.body.querySelector(".members-carousel");
        membersJson.forEach(memberData => {
            populateMemberCard(createMemberCard(membersContainer), memberData);
        });
    }
    catch (error) {
        console.log(error);
    }

    // start of button interactity
    //const nextBtn = document.getElementById("team-arrow--right");
    //const prevBtn = document.getElementById("team-arrow--left");
    //const cardsArr = Array.from(document.getElementsByTagName("my-member-card"));
    //let currCard = 0;
    //const lastCard = cardsArr.length - 1;

    //const nextBtnHandler = () => {
    //    currCard === lastCard - 3 ? currCard = 0 : currCard++;

    //    for (let i = currCard; i < currCard + 4; i++) {
    //        cardsArr[i].classList.add("active");
    //        // supposed to be animation, not working correctly
    //        //cardsArr[i].style.transform = `translateX(-100%)`;
    //    }
    //}

    //const prevBtnHandler = () => {
    //    currCard === 0 ? currCard = lastCard - 3 : currCard--;

    //    for (let i = currCard; i < currCard + 4; i++) {
    //        cardsArr[i].classList.add("active");
    //        // supposed to be animation, not working correctly
    //        //cardsArr[i].style.transform = `translateX(100%)`;
    //    }
    //}

    //nextBtn.addEventListener("click", nextBtnHandler);
    //prevBtn.addEventListener("click", prevBtnHandler);
})();
