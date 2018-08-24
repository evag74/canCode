// The HTML to go inside the footer
var footerHTML = '<br><h3>canCode 2018</h3>' +
  '<div class="socialBox">' +
    '<div><a href="https://www.instagram.com/cancodeus" target="_blank"><img class="socialLink" src="https://cancode.us/Images/facebook_logo.png"></a></div>' +
    '<div><a><img class="socialLink" src="https://cancode.us/Images/instagram_logo.png"></a></div>' +
  '</div>' +
  '<a href="https://docs.google.com/forms/d/e/1FAIpQLScFFaOUJyAn4SEs3n6gKJGPYcmzzfVWXgnjXdLdYJbWYHk__w/viewform" target="_blank"><div class="smallButton">Become a Teacher</div></a>' +
  '<a><div class="smallButton">Become a Site (Coming Soon)</div></a>' +
  '<a><div class="smallButton">Donate (Coming Soon)</div></a>';

document.getElementById("footer").innerHTML = footerHTML; // Puts the contents of footerHTML inside of the div with id="footer"
