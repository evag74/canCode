// These are limits for at how many pixels changes to the site happen
var mobileLimit = 950; // When the screen is this size or smaller, it switches to mobile
var resourceButtonLimit = 575; // When the screen is this size or smaller, the tabs are replaced with a big "Resources tab"
var resourceWordLimit = 325; // When the screen is this size or smaller, the "Resources" tab is renamed "More".

var body = document.getElementsByTagName("body")[0];
var buttons = document.getElementsByClassName("button");

function buttonHighlight(site, button) { // Matches a site to the button in the navbar to highlight when on that site
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

// Matches sites to navbar buttons that are highlighted
buttonHighlight("", 0); buttonHighlight("index", 0);
buttonHighlight("sponsors", 1);
buttonHighlight("photos", 2);
buttonHighlight("sites", 3);
buttonHighlight("team", 4);
buttonHighlight("parent", 5);
buttonHighlight("student", 6);
buttonHighlight("resources", 7);
buttonHighlight("contribute", 8);

function mobileFormat(event){ // Function that is run every time the site is resized to work with the limits explained above
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
var i = 1;

mobileFormat(null); // Format the screen based on screen size immediately
window.addEventListener('resize', mobileFormat); // Then continue to format the screen on resize
