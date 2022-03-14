// The HTML to go inside the footer
var footerHTML = '<div class="divTable">' +

'<div class="divTableCell">' + '<img src="https://cancode.us/Images/canCodePlain2.png" width="30%" align="left">' + '<br>' + '<br>' + '<br>' +
'<a href="https://www.cancode.us"><p style="line-height:20%" align="left">Home<p></a>' +
'<a href="https://www.cancode.us/sponsors"><p style="line-height:20%" align="left">Sponsors<p></a>' +
'<a href="https://www.cancode.us/contribute"><p style="line-height:20%" align="left">Contribute<p></a>' +
'<a href="https://www.cancode.us/student"><p style="line-height:20%" align="left">Student Resources<p></a>' +
'<a href="https://www.cancode.us/parent"><p style="line-height:20%" align="left">Parent Resources<p></a>' +
'<a href="https://www.cancode.us/team"><p style="line-height:20%" align="left">Meet our Team<p></a>' +
'<a href="https://www.cancode.us/sites"><p style="line-height:20%" align="left">Participating Sites<p></a>' +
'<a href="https://www.cancode.us/photos"><p style="line-height:20%" align="left">Photos<p></a>' +
'<a href="https://www.cancode.us/games"><p style="line-height:20%" align="left">Games<p></a>' +
'<a href="https://www.cancode.us/secret"><p style="line-height:20%" align="left">Teacher Portal<p></a></div>' +

'<div class="divTableCell">' +
'<br><a href="https://www.scratch.mit.edu" target="_blank"><img src="https://cancode.us/Images/Scratch_cat.png" width="40%"></a></div>' +

'<div class="divTableCell">' + '<h3>canCode 2022</h3>' +
  '<div class="socialBox">' +
    '<div><a class="button" href="https://www.facebook.com/CanCode-160731814646570/" target="_blank"><img class="socialLink" src="https://cancode.us/Images/facebook_logo.png"></a></div>' +
    '<div><a class="button" href="https://www.instagram.com/cancodeus" target="_blank"><img class="socialLink" src="https://cancode.us/Images/instagram_logo.png"></a></div>' +
    '<div><a class="button" href="https://www.twitter.com/cancodeus" target="_blank"><img class="socialLink" src="Images/twitter.png"></a></div>' +
  '</div>' + '<center>' +
  '<a href="https://docs.google.com/forms/d/e/1FAIpQLScFFaOUJyAn4SEs3n6gKJGPYcmzzfVWXgnjXdLdYJbWYHk__w/viewform" target="_blank"><div class="smallButton">Become a Teacher</div></a>' +
  '<a href="https://goo.gl/forms/DFZoOj39Oegoqafs1" target="_blank"><div class="smallButton">Become a Site</div></a>' +
  '<a><div class="smallButton">Donate (Coming Soon)</div></a>' + '</center></div>' + '</div>';

document.getElementById("footer").innerHTML = footerHTML; // Puts the contents of footerHTML inside of the div with id="footer"
