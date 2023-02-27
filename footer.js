function isMobile() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

let footerHTML = "";

// The HTML to go inside the footer
var footerHTML1 = '<div class="divTable">' +

'<div class="divTableCell">' + '<img src="https://cancode.us/Images/canCodePlain2.png" width="30%" align="left">' + '<br>' + '<br>' + '<br>' +
'<a href="https://www.cancode.us"><p style="line-height:20%" align="left">Home<p></a>' +
'<a href="https://www.cancode.us/sponsors"><p style="line-height:20%" align="left">Sponsors<p></a>' +
'<a href="https://www.cancode.us/contribute"><p style="line-height:20%" align="left">Contribute<p></a>' +
'<a href="https://www.cancode.us/student"><p style="line-height:20%" align="left">Student Resources<p></a>' +
'<a href="https://www.cancode.us/parent"><p style="line-height:20%" align="left">Parent Resources<p></a>' +
'<a href="https://www.cancode.us/team"><p style="line-height:20%" align="left">Meet our Team<p></a>' +
'<a href="https://www.cancode.us/sites"><p style="line-height:20%" align="left">Participating Sites<p></a>' +
'<a href="https://www.cancode.us/photos"><p style="line-height:20%" align="left">Photos<p></a>';

var footerHTMLGame = '<a href="https://www.cancode.us/games"><p style="line-height:20%" align="left">Games<p></a>';

var footerHTML2 =
'<a href="https://www.cancode.us/thanks"><p style="line-height:20%" align="left">Thank You cards<p></a>' +
'<a href="https://www.cancode.us/secret"><p style="line-height:20%" align="left">Teacher Portal<p></a>' +
'<p class="small silver">Made by the canCode web development team</p>' + '<br>' + '</br>' + '<p class="small silver">Current website dev team: Semyon Baykovm, Eva Gottsfield, Logan Albala, Aditya Arora, and Maximilian Meiler</p>' + '</div>' +
// '<p class="small silver">Harys Dalvi, Alex Mark, Akhil Deo, Semyon Baykov, Eva Gottsfeld, Logan Albala, Aditya Arora, Maximilian Meiler, Jacob Ryabinky, and Umair Kazi</p>' + '<br>' + '</br>' + 
'<div class="divTableCell">' +
'<br><a href="https://www.scratch.mit.edu" target="_blank"><img src="https://cancode.us/Images/Scratch_cat.png" width="40%"></a></div>' +

'<div class="divTableCell">' + '<h3>© canCode 2023</h3>' +
  '<div class="socialBox">' +
    '<div><a class="button" href="https://www.facebook.com/CanCode-160731814646570/" target="_blank"><img class="socialLink" src="https://cancode.us/Images/facebook_logo.png"></a></div>' +
    '<div><a class="button" href="https://www.instagram.com/cancodeus" target="_blank"><img class="socialLink" src="https://cancode.us/Images/instagram_logo.png"></a></div>' +
    '<div><a class="button" href="https://www.twitter.com/cancodeus" target="_blank"><img class="socialLink" src="Images/twitter.png"></a></div>' +
  '</div>' + '<center>' +
  '<a href="https://docs.google.com/forms/d/e/1FAIpQLScFFaOUJyAn4SEs3n6gKJGPYcmzzfVWXgnjXdLdYJbWYHk__w/viewform" target="_blank"><div class="smallButton">Become a Teacher</div></a>' +
  '<a href="https://www.cancode.us/contribute?openform=site"><div class="smallButton">Become a Site</div></a>' +
  '<div id="donate"></div><a href="https://www.cancode.us/donate"><div class="smallButton">Donate</div></a>' + '</center></div>' + '</div>';

footerHTML = footerHTML1; // Puts the contents of footerHTML inside of the div with id="footer"
if (!isMobile())
  footerHTML += footerHTMLGame;
footerHTML += footerHTML2;
document.getElementById("footer").innerHTML = footerHTML;