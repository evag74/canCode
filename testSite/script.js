import { TeamMember } from './membersParse.js'

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

    const request = window.indexedDB.open("testDB", 3);
})


