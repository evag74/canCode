var mobileLimit = 950;
var resourceButtonLimit = 525;
var resourceWordLimit = 350;
var body = document.getElementsByTagName("body")[0];
var buttons = document.getElementsByClassName("button");
function buttonHighlight(site, button) {
  if (location.pathname.endsWith("/" + site) || location.pathname.endsWith("/" + site + ".html")) {
    buttons[button].className = buttons[button].className + " highlight";
  }
}
document.getElementsByClassName("navbar")[0].innerHTML =
  '<ul>' +
    '<a href="/" class="button left"><img src="http://canCode.us/Images/canCodePlain1.png"></a>' +
    '<a href="http://canCode.us/sponsors" class="button left">Sponsors</a>' +
    '<a href="http://canCode.us/photos" class="button">Photos</a>' +
    '<a href="http://canCode.us/teachers" class="button">Teachers</a>' +
    '<a href="http://canCode.us/parent" class="button">Parent</a>' +
    '<a href="http://canCode.us/student" class="button">Student</a>' +
    '<a href="http://canCode.us/resources" class="button">Resources</a>' +
    '<a href="http://canCode.us/contribute" class="button">Contribute</a>' +
  '</ul>';
buttonHighlight("/", 0);
buttonHighlight("sponsors", 1);
buttonHighlight("photos", 2);
buttonHighlight("teachers", 3);
buttonHighlight("parent", 4);
buttonHighlight("student", 5);
buttonHighlight("resources", 6);
buttonHighlight("contribute", 7);
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
    buttons[6].style.display = "block";
  } else {
    buttons[2].style.display = "block";
    buttons[3].style.display = "block";
    buttons[4].style.display = "block";
    buttons[5].style.display = "block";
    buttons[6].style.display = "none";
  }
  if (document.documentElement.clientWidth <= resourceWordLimit) {
    buttons[6].innerText = "More";
  } else {
    buttons[6].innerText = "Resources";
  }
}
mobileFormat(null);
window.addEventListener('resize', mobileFormat);
