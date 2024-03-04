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

    try {
        const contribJson = await getContributors("./ContributorData.json");

        console.log(contribJson);
        contribJson.forEach((contribData) => {
            ContributionContent.createContributionContent(contribContainer, contribData).classList.add("hidden");
        });
    } catch (error) {
        console.error(error);
    }



})();
