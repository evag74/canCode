// These are limits for at how many pixels changes to the site happen
const MOBILE_LIMIT = 950; // When the screen is this size or smaller, it switches to mobile
const MORE_LIMIT = 420; // When the screen is this size or smaller, tabs are moved into the "more" tab

var body = document.getElementsByTagName("body")[0];
var buttons = document.getElementsByClassName("button");
var expanded = false; // true when the "more" button is clicked

function buttonHighlight(site, button) // Matches a site to the button in the navbar to highlight when on that site
{
  if (((location.pathname.endsWith("/" + site) || location.pathname.endsWith("/" + site + ".html")) && !(location.pathname.endsWith("secret/")))
        && location.pathname.indexOf("online") == -1) {
    buttons[button].className = buttons[button].className + " highlight";
  }
}

var slideshowtarget = document.getElementById("slideshowpicture");

if (slideshowtarget != null) {
  // Preload images to prevent delay
  img1 = new Image();
  img2 = new Image();
  img3 = new Image();
  img4 = new Image();
  img1.src = "https://cancode.us/Images/menu_closed.png";
  img2.src = "https://cancode.us/Images/menu_hover.png";
  img3.src = "https://cancode.us/Images/menu_open.png";
  img4.src = "https://cancode.us/Images/menu_open_hover.png";
}

/* Here is the HTML code that will be inserted into the first item with class "navbar".
It automatically updates on all pages that are linked to mobile.js. */
document.getElementsByClassName("navbar")[0].innerHTML =
  '<ul>' +
    '<a href="/" class="button left"><img src="https://cancode.us/Images/canCodePlain1.png"></a>' +
    '<a href="https://www.cancode.us/contribute" class="button left">Contribute</a>' +
    '<a class="button" id="burgerButton" onclick="expand()">' +
      '<img src="https://cancode.us/Images/menu_closed.png" id="burger_closed">' +
      '<img src="https://cancode.us/Images/menu_hover.png" id="burger_hover">' +
    '</a>' +
    '<a href="https://www.cancode.us/photos" class="button">Photos</a>' +
    '<a href="https://www.cancode.us/sites" class="button">Sites</a>' +
    '<a href="https://www.cancode.us/sponsors" class="button">Sponsors</a>' +
  '</ul>' +
  '<div id="hiddenNavbar"></div>';
document.getElementById("hiddenNavbar").innerHTML =
  '<a href="https://www.cancode.us/contribute" class="button">Contribute</a>' +
  '<a href="https://www.cancode.us/student" class="button">Student</a>' +
  '<a href="https://www.cancode.us/parent" class="button">Parent</a>' +
  '<a href="https://www.cancode.us/team" class="button">Team</a>' +
  '<a href="https://www.cancode.us/sponsors" class="button">Sponsors</a>' +
  '<a href="https://www.cancode.us/sites" class="button">Sites</a>';

if (!isMobile()) {
  document.getElementById("hiddenNavbar").innerHTML += '<a href="https://www.cancode.us/games" class="button">Games</a>';
}
document.getElementById("hiddenNavbar").innerHTML += '<a href="https://www.cancode.us/thanks" class="button">Thanks</a>' +
  '<a href="https://www.cancode.us/news" class="button">In the News</a>';

// Matches sites to navbar buttons that are highlighted
buttonHighlight("", 0); buttonHighlight("index", 0);
buttonHighlight("contribute", 1);
buttonHighlight("photos", 3);
buttonHighlight("sites", 4);
buttonHighlight("sponsors", 5);
buttonHighlight("contribute", 6);
buttonHighlight("student", 7);
buttonHighlight("parent", 8);
buttonHighlight("team", 9);
buttonHighlight("sponsors", 10);
buttonHighlight("sites", 11);
if (isMobile()) {
  buttonHighlight("thanks", 12);
  buttonHighlight("news", 13);
} else {
  buttonHighlight("games", 12);
  buttonHighlight("thanks", 13);
  buttonHighlight("news", 14);
}

function expand() {
  if (expanded) {
    expanded = false;
    buttons[2].innerHTML = '<img src="https://cancode.us/Images/menu_closed.png" id="burger_closed">' +
                           '<img src="https://cancode.us/Images/menu_hover.png" id="burger_hover">';
    document.getElementById("hiddenNavbar").style.display = "none";
  } else {
    expanded = true;
    buttons[2].innerHTML = '<img src="https://cancode.us/Images/menu_open.png" id="burger_closed">' +
                           '<img src="https://cancode.us/Images/menu_open_hover.png" id="burger_hover">';
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
    buttons[10].style.display = "block";
    buttons[11].style.display = "block";
  } else {
    buttons[4].style.display = "block";
    buttons[5].style.display = "block";
    buttons[10].style.display = "none";
    buttons[11].style.display = "none";
  }
}
var i = 1;

mobileFormat(null); // Format the screen based on screen size immediately
window.addEventListener('resize', mobileFormat); // Then continue to format the screen on resize
