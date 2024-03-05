import { ContributionContent } from "./Components/contributionContent/contributionContent.js";


async function getContributors(filePath) {
    const response = await fetch(`${filePath}`);

    if (!response.ok) {
        throw Error("(-) Response not ok\n", response);
    }
    return response.json();
}

// contrib = contribution
(async function() {
    const contribContainer = document.querySelector(".contribution-container");
    const arrowLeft = document.querySelector(".contribution-arrow-left");
    const arrowRight = document.querySelector(".contribution-arrow-right");

    let contribIndex = 0;
    let contribArr = [];

    try {
        const contribJson = await getContributors("./Data/ContributorData.json");

        contribJson.forEach((contribData) => {
            ContributionContent.createContributionContent(contribContainer, contribData).classList.add("hidden");
        });

        contribArr = contribContainer.querySelectorAll("my-contribution-content");
    } catch (error) {
        console.error(error);
    }

    //console.log(contribArr);
    // INITIALIZE first object.
    contribArr[0].classList.remove("hidden");
    // Variable for cleaning intervals.
    let switchingInterval = 0;
    switchingInterval = setInterval(nextButtonHandler, 3000);

    function setCurrContrib(newContribIndex) {
        contribArr[contribIndex].classList.add("hidden");
        contribIndex = newContribIndex;
        contribArr[contribIndex].classList.remove("hidden");
    }

    //TODO: FIX THE TWO HANDLERS BY ADDING THIS FUNCTION ^
    function prevButtonHandler() {
        contribIndex === 0 ? setCurrContrib(contribArr.length - 1) : setCurrContrib(contribIndex - 1);

        clearInterval(switchingInterval);
        switchingInterval = setInterval(prevButtonHandler, 5000);
    }

    function nextButtonHandler() {
        contribIndex === contribArr.length - 1 ? setCurrContrib(0) : setCurrContrib(contribIndex + 1);

        clearInterval(switchingInterval);
        switchingInterval = setInterval(nextButtonHandler, 5000);
    }

    arrowLeft.addEventListener("click", prevButtonHandler);
    arrowRight.addEventListener("click", nextButtonHandler);
})();
