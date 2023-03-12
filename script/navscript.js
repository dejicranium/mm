$(".icon").click(function () {
  $("span").toggleClass("cancel");
});

//////////////////////
//////preloader//////

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
