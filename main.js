/* donateHTML function: replaced by donate page

function donateHTML(id) {
  document.getElementById(id).innerHTML = "<br>Thank you for your interest in helping " +
    " canCode. To donate, please contact one of the following:<br><ol><li>" +
    "(561) 251-7700</li><li>info@cancode.us</li></ol>Thank you!";
}
*/

function showElement(id) {
  document.getElementById(id).style.display = "block";
}
function hideElement(id) {
  document.getElementById(id).style.display = "none";
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// function covidBanner() {
//   var banner = document.getElementById("covid_banner");
//   if (banner != null) {
//     banner.innerHTML = "<div id='covid_div'>" +
//       "<div><center><p>Due to COVID-19, we are wearing masks and following CDC guidelines at all in-person classes. " +
//       "Please click on this banner to learn more about our in-person sites.</center>" +
//       "</div><div><br><div id='virus_div'><img src='https://phil.cdc.gov//PHIL_Images/2871/2871_lores.jpg' height='197px' width='350px'>" +
//       "<p>CDC/ Alissa Eckert, MS; Dan Higgins, MAMS</p></div></div>" +
//       "<div id='covid_buttons'><a href='https://www.cancode.us/hackathon'><div class='smallButton'>Teen Hackathon</div></a>" +
//       "<a href='https://docs.google.com/forms/d/e/1FAIpQLScFFaOUJyAn4SEs3n6gKJGPYcmzzfVWXgnjXdLdYJbWYHk__w/viewform' target='_blank'><div class='smallButton'>Become a Teacher</div></a>" +
//       "</div></div>"; // buttons, banner
//     banner.href = "https://www.cancode.us/sites";
//   }
// }
// covidBanner();
