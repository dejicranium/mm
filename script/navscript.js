$(".icon").click(function () {
  $("span").toggleClass("cancel");
});

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
  var current_pos = nav.offsetTop;
  window.onscroll = function () {
    var window_pos = document.documentElement.scrollTop;
    if (window_pos >= current_pos) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };
});
