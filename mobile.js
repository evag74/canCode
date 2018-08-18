var mobileLimit = 950;
var iconLinkLimit = 475;
function mobileFormat(event){
  var body = document.getElementsByTagName("body")[0];
  var imageLink = document.getElementsByClassName(".button.left")[0];
  console.log(window.location.pathname);
  if (document.documentElement.clientWidth <= mobileLimit) {
    body.className = "mobile";
    if (document.documentElement.clientWidth <= iconLinkLimit) {
      imageLink.style.display = "none";
    } else {
      imageLink.style.display = "block";
    }
  } else {
    body.className = '';
    imageLink.style.display = "block";
  }
}
mobileFormat(null);
window.addEventListener('resize', mobileFormat);
