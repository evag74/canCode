// These are limits for at how many pixels changes to the site happen
const MOBILE_LIMIT = 950; // When the screen is this size or smaller, it switches to mobile
const MORE_LIMIT = 575; // When the screen is this size or smaller, the tabs are moved into the "more" tab

var body = document.getElementsByTagName("body")[0];
var buttons = document.getElementsByClassName("button");
var expanded = false; // true when the "more" button is clicked

function buttonHighlight(site, button) // Matches a site to the button in the navbar to highlight when on that site
{
  if ((location.pathname.endsWith("/" + site) || location.pathname.endsWith("/" + site + ".html")) && !(location.pathname.endsWith("secret/"))) {
    buttons[button].className = buttons[button].className + " highlight";
  }
}

var slideshowtarget = document.getElementById("slideshowpicture");

/* Here is the HTML code that will be inserted into the first item with class "navbar".
It automatically updates on all pages that are linked to mobile.js.
This is the main section you need to worry about. */
document.getElementsByClassName("navbar")[0].innerHTML =
  '<ul>' +
    '<a href="/" class="button left"><img src="https://cancode.us/Images/canCodePlain1.png"></a>' +
    '<a href="https://www.cancode.us/sponsors" class="button left">Sponsors</a>' +
    '<a class="button" onclick="expand()">More</a>' +
    '<a href="https://www.cancode.us/sites" class="button">Sites</a>' +
    '<a href="https://www.cancode.us/team" class="button">Team</a>' +
    '<a href="https://www.cancode.us/parent" class="button">Parent</a>' +
    '<a href="https://www.cancode.us/student" class="button">Student</a>' +
    '<a href="https://www.cancode.us/contribute" class="button">Contribute</a>' +
  '</ul>' +
  '<div id="hiddenNavbar"></div>';
document.getElementById("hiddenNavbar").innerHTML =
  '<a href="https://www.cancode.us/contribute" class="button">Contribute</a>' +
  '<a href="https://www.cancode.us/student" class="button">Student</a>' +
  '<a href="https://www.cancode.us/parent" class="button">Parent</a>' +
  '<a href="https://www.cancode.us/team" class="button">Team</a>' +
  '<a href="https://www.cancode.us/photos" class="button">Photos</a>' +
  '<a href="https://www.cancode.us/studentsafe" class="button">Student Safe</a>';

// Matches sites to navbar buttons that are highlighted
buttonHighlight("", 0); buttonHighlight("index", 0);
buttonHighlight("sponsors", 1);
buttonHighlight("sites", 3);
buttonHighlight("team", 4);
buttonHighlight("parent", 5);
buttonHighlight("student", 6);
buttonHighlight("contribute", 7);

function expand() {
  if (expanded) {
    expanded = false;
    buttons[2].innerHTML = "More";
    document.getElementById("hiddenNavbar").style.display = "none";
  } else {
    expanded = true;
    buttons[2].innerHTML = "Hide";
    document.getElementById("hiddenNavbar").style.display = "flex";
  }
}

function mobileFormat(event) // Function that is run every time the site is resized to work with the limits explained above
{
  console.log(window.location.pathname);
  if (document.documentElement.clientWidth <= MOBILE_LIMIT) {
    body.className = "mobile";
  } else {
    body.className = '';
  }
  if (document.documentElement.clientWidth <= MORE_LIMIT) {
    buttons[4].style.display = "none";
    buttons[5].style.display = "none";
    buttons[6].style.display = "none";
    buttons[7].style.display = "none";
    buttons[8].style.display = "block";
    buttons[9].style.display = "block";
    buttons[10].style.display = "block";
    buttons[11].style.display = "block";
  } else {
    buttons[4].style.display = "block";
    buttons[5].style.display = "block";
    buttons[6].style.display = "block";
    buttons[7].style.display = "block";
    buttons[8].style.display = "none";
    buttons[9].style.display = "none";
    buttons[10].style.display = "none";
    buttons[11].style.display = "none";
  }
}
var i = 1;

mobileFormat(null); // Format the screen based on screen size immediately
window.addEventListener('resize', mobileFormat); // Then continue to format the screen on resize
