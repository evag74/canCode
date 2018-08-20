var mobileLimit = 950;
var resourceButtonLimit = 575;
var resourceWordLimit = 325;
var body = document.getElementsByTagName("body")[0];
var buttons = document.getElementsByClassName("button");
function buttonHighlight(site, button) {
  if ((location.pathname.endsWith("/" + site) || location.pathname.endsWith("/" + site + ".html")) && !(location.pathname.endsWith("secret/"))) {
    buttons[button].className = buttons[button].className + " highlight";
  }
}
document.getElementsByClassName("navbar")[0].innerHTML =
  '<ul>' +
    '<a href="/" class="button left"><img src="https://canCode.us/Images/canCodePlain1.png"></a>' +
    '<a href="https://canCode.us/sponsors" class="button left">Sponsors</a>' +
    '<a href="https://canCode.us/photos" class="button">Photos</a>' +
    '<a href="https://canCode.us/sites" class="button">Sites</a>' +
    '<a href="https://canCode.us/team" class="button">Team</a>' +
    '<a href="https://canCode.us/parent" class="button">Parent</a>' +
    '<a href="https://canCode.us/student" class="button">Student</a>' +
    '<a href="https://canCode.us/resources" class="button">Resources</a>' +
    '<a href="https://canCode.us/contribute" class="button">Contribute</a>' +
  '</ul>';
buttonHighlight("", 0); buttonHighlight("index", 0);
buttonHighlight("sponsors", 1);
buttonHighlight("photos", 2);
buttonHighlight("sites", 3);
buttonHighlight("team", 4);
buttonHighlight("parent", 5);
buttonHighlight("student", 6);
buttonHighlight("resources", 7);
buttonHighlight("contribute", 8);
function mobileFormat(event){
  console.log(window.location.pathname);
  if (document.documentElement.clientWidth <= mobileLimit) {
    body.className = "mobile";
  } else {
    body.className = '';
  }
  if (document.documentElement.clientWidth <= resourceButtonLimit) {
    buttons[2].style.display = "none";
    buttons[3].style.display = "none";
    buttons[4].style.display = "none";
    buttons[5].style.display = "none";
    buttons[6].style.display = "none";
    buttons[7].style.display = "block";
  } else {
    buttons[2].style.display = "block";
    buttons[3].style.display = "block";
    buttons[4].style.display = "block";
    buttons[5].style.display = "block";
    buttons[6].style.display = "block";
    buttons[7].style.display = "none";
  }
  if (document.documentElement.clientWidth <= resourceWordLimit) {
    buttons[7].innerText = "More";
  } else {
    buttons[7].innerText = "Resources";
  }
}
mobileFormat(null);
window.addEventListener('resize', mobileFormat);
