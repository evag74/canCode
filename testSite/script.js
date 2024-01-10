//const observer = new IntersectionObserver(entries => {
//    entries.forEach(entry => {
//        if (entry.isIntersecting) {
//            entry.target.classList.add('progress-bar-animation');
//            console.log("intersection!!");
//            return;
//        }
//
//        entry.target.classList.remove('progress-bar-animation');
//    })
//});
//
//const progressBars = document.querySelectorAll('.progress-bar-inside');
//progressBars.forEach((el) => console.log(el));
//
//// Still have to figure out how to use querySelectorAll, currently elements aren't being caught
//progressBars.forEach((element) => observer.observe(element));

function showElement(id) {
    document.getElementById(id).style.display = "block";
}
function hideElement(id) {
    document.getElementById(id).style.display = "none";
}

//document.querySelector(".navbar--link").addEventListener("onmouseover", toggleDropdown);;
document.getElementsByClassName("navbar--link").item(0)
    .addEventListener("onmouseover", toggleDropdown());

// working on iterating elements of class navbar--link to show them on-screen
// last Error: toggle() is not a function
function toggleDropdown() {
    Array.from(document.getElementsByClassName("navbar--link")).forEach((x) => x.toggle("show"));
}
