// start of populating tables
function createMemberCard(membersContainer) {
    const newCard = document.createElement("my-member-card");
    return membersContainer.appendChild(newCard);
}

function populateMemberCard(newCard, teamData) {
    const { HighSchool, Name, Description } = teamData;
    newCard.querySelector("h4").innerText = `${HighSchool}`;
    newCard.querySelector("h6").innerText = `${Name}`;
    newCard.querySelector("p").innerText = `${Description}`;
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
    const cardsArr = Array.from(document.getElementsByTagName("my-member-card"));
    let currCard = 0;
    const lastCard = cardsArr.length - 1;

    const nextBtnHandler = () => {
        currCard === lastCard - 3 ? currCard = 0 : currCard++;

        cardsArr.forEach(el => el.classList.remove("active"));
        for (let i = currCard; i < currCard + 4; i++) {
            cardsArr[i].classList.add("active");
            // supposed to be animation, not working correctly
            //cardsArr[i].style.transform = `translateX(-100%)`;
        }
    }

    const prevBtnHandler = () => {
        currCard === 0 ? currCard = lastCard - 3 : currCard--;

        cardsArr.forEach(el => el.classList.remove("active"));
        for (let i = currCard; i < currCard + 4; i++) {
            cardsArr[i].classList.add("active");
            // supposed to be animation, not working correctly
            //cardsArr[i].style.transform = `translateX(100%)`;
        }
    }

    //init first four elements.
    for (let i = currCard; i < currCard + 4; i++) {
        cardsArr[i].classList.add("active");
    }

    nextBtn.addEventListener("click", nextBtnHandler);
    prevBtn.addEventListener("click", prevBtnHandler);
})();
