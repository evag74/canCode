import { ImageContentLayout } from './Components/layouts/imgContentLayout.js'

async function getSites(filePath) {
    const response = await fetch(`${filePath}`);

    if (!response.ok) {
        throw Error(response);
    }

    return response.json();
}

(async function() {
    const siteData = await getSites("./Data/siteData.json");

    console.log(siteData);
    const siteContainer = document.querySelector(".sites-container");

    siteData.forEach((site) => {
        ImageContentLayout.createSiteLayout(siteContainer, site);
    });
})();
