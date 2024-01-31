//for slide information
class TeamMember {
    constructor(highSchool, name, description) {
        this.highSchool = highSchool;
        this.name = name;
        this.description = description;
    }
}

(function() { // IIFE to not pollute namespace
    // Initialize TeamMember Arr from JSON file.
    const fs = require('fs')

    let data = fs.readFileSync('./teamData.json');
    teamArr = JSON.parse(data).map(obj => new TeamMember(obj.HighSchool, obj.Name, obj.Description));

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
            .slice(bannerStart, bannerEnd)
            .forEach((banner, i) => {
                banner.children[1].innerHTML = teamArr[i].highSchool;
                banner.children[2].innerHTML = teamArr[i].name;
                banner.children[3].innerHTML = teamArr[i].description;
            });
    })
})()
