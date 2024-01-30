//for slide information
class TeamMember {
    constructor(highSchool, name, description) {
        this.highSchool = highSchool;
        this.name = name;
        this.description = description;
    }
}

// Initialize TeamMember Arr from JSON file.
const data = await fetch('./teamData.json')
    .then((response) => response.json())

const teamArr = data.map(obj => new TeamMember(obj.HighSchool, obj.Name, obj.Description));


// All startup functionality goes into this function.
// Triggered when page loads
window.addEventListener('load', function() {
    let bannerStart = 0;
    let bannerEnd = bannerStart + 4;
    const teamMemberBanners = document.querySelectorAll(".members-card-div");
    const bannerLength = teamMemberBanners.length;

    console.log(teamMemberBanners);
    console.log(teamArr);

    // length: 5, i = 3, endI = 7,
    teamMemberBanners
        .slice(bannerStart, bannerEnd < bannerLength ? bannerEnd : bannerLength - 1)
        .concat(
            // working on this part rn, array should have a sliding window of size 4
            // that wraps around if it goes past the last el.
            teamMemberBanners
                .slice(0, bannerEnd < bannerLength ? 0 : (bannerEnd - bannerLength) + 1)
        )
        .forEach((banner, i) => {
            banner.children[1].innerHTML = teamArr[i].highSchool;
            banner.children[2].innerHTML = teamArr[i].name;
            banner.children[3].innerHTML = teamArr[i].description;
        });
})
