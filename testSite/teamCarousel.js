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
    const teamMemberBanners = document.querySelectorAll(".members-card-div");

    console.log(teamMemberBanners);
    console.log(teamArr);

    teamMemberBanners.forEach((banner, i) => {
        banner.children[1].innerHTML = teamArr[i].highSchool;
        banner.children[2].innerHTML = teamArr[i].name;
        banner.children[3].innerHTML = teamArr[i].description;
    });
})


