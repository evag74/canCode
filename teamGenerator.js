// used for creation and updating data of memberCard, components.
import { MemberCard } from "./Components/memberCard/memberCard.js";

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
            MemberCard.createMemberCard(membersContainer, memberData);
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
