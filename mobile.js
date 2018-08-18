var mobileLimit = 1100;
function mobileFormat(event){
  var body = document.getElementsByTagName("BODY")[0];
  console.log(window.location.pathname);
  if (document.documentElement.clientWidth <= mobileLimit) {
    body.className = "mobile";
  } else {
    body.className = '';
  }
}
mobileFormat(null);
window.addEventListener('resize', mobileFormat);
