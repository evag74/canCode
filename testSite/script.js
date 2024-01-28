import { TeamMember } from './membersParse.js'

// Initialize TeamMember Arr from JSON file.
const data = await fetch('./teamData.json')
    .then((response) => response.json())

const teamArr = data.map(obj => new TeamMember(obj.HighSchool, obj.Name, obj.Description));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('progress-bar-animation');
            return;
        }

        entry.target.classList.remove('progress-bar-animation');
    })
});

// All startup functionality goes into this function.
// Triggered when page loads
window.addEventListener('load', function() {
    const progressBars = document.querySelectorAll(".progress-bar-inside");

    progressBars.forEach(bar => observer.observe(bar));

    const teamMemberBanners = document.querySelectorAll(".members-card-div");

    console.log(teamMemberBanners);
    console.log(teamArr);

    teamMemberBanners.forEach((banner, i) => {
        banner.children[1].innerHTML = teamArr[i].highSchool;
        banner.children[2].innerHTML = teamArr[i].name;
        banner.children[3].innerHTML = teamArr[i].description;
    });
})


