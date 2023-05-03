$(".icon").click(function () {
  $("span").toggleClass("cancel");
});

//////////////////////
//////preloader//////
//////////////////////
//////preloader//////

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
//////////////////////////////////
////////////////////////////////////////nav sticky/////////////
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("nav");
  var logo = document.getElementById("logo");
  var current_pos = nav.offsetTop;
  window.onscroll = function () {
    var window_pos = document.documentElement.scrollTop;
    if (window_pos >= current_pos) {
      nav.classList.add("sticky");
      logo.classList.add("nologo");
    } else {
      nav.classList.remove("sticky");
      logo.classList.remove("nologo");
    }
  };
});
//////////////////////////////////
////////////////////////////////////////Preloader/////////////
var loader = document.getElementById("preloader");

// Event listener for page load
window.addEventListener("load", function () {
  // Set a timeout for 3 seconds after the page loads
  setTimeout(() => {
    // Hide the preloader after the timeout
    loader.style.display = "none !important";
  }, 3000);
});
