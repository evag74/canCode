function donateHTML(id) {
  document.getElementById(id).innerHTML = "<br>Thank you for your interest in helping " +
    " canCode. To donate, please contact one of the following:<br><ol><li>" +
    "(561) 251-7700</li><li>info@cancode.us</li></ol>Thank you!";
}

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

function covidBanner() {
  var banner = document.getElementById("covid_banner");
  if (banner != null) {
    banner.innerHTML = "<div id='covid_div'>" +
      "<div><p>Due to COVID-19, we are not teaching students face-to-face at this time. " +
      "However, we are continuing with virtual lessons so students can keep learning. Please " +
      "click on this banner to learn more about our virtual lessons." +
      "</div><div><br><div id='virus_div'><img src='https://phil.cdc.gov//PHIL_Images/2871/2871_lores.jpg' height='197px' width='350px'>" +
      "<p>CDC/ Alissa Eckert, MS; Dan Higgins, MAMS</p></div></div>" +
      "<div id='covid_buttons'><a href='https://www.cancode.us/student/contest'><div class='smallButton'>Student Contest</div></a>" +
      "<a href='http://events.pbclibrary.org/events/digital-activities?field_title_of_activity_value=cancode&field_location_tid_selective=All&field_digital_activity_type_value_selective=All' target='_blank'><div class='smallButton'>Library Workshops</div></a>" +
      "<a href='https://docs.google.com/forms/d/e/1FAIpQLScFFaOUJyAn4SEs3n6gKJGPYcmzzfVWXgnjXdLdYJbWYHk__w/viewform' target='_blank'><div class='smallButton'>Become a Teacher</div></a>" +
      "</div></div>"; // buttons, banner
    banner.href = "https://www.cancode.us/online";
  }
}
covidBanner();
