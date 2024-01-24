observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('progress-bar-animation');
            console.log("intersection!!");
            return;
        }

        entry.target.classList.remove('progress-bar-animation');
    })
});

//const progressBars = document.querySelectorAll(".progress-bar-inside")

// Still have to figure out how to use querySelectorAll, currently elements aren't being caught
window.addEventListener('load', function() {
    progressBars = document.querySelectorAll(".progress-bar-inside");
    progressBars.forEach(bar => observer.observe(bar));
})



/*
function showElement(id) {
    document.getElementById(id).style.display = "block";
}
function hideElement(id) {
    document.getElementById(id).style.display = "none";
}

//document.querySelector(".navbar--link").addEventListener("onmouseover", toggleDropdown);;
console.log(document.getElementsByClassName("navbar--link"));
document.getElementsByClassName("navbar--link").item(0).addEventListener("onmouseover", toggleDropdown());


function toggleDropdown() {
    navLinks = document.getElementsByClassName("navbar--link");

   for (let el of navLinks) {
        el.classList.toggle("show");
    }
}
*/
