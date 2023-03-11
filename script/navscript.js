$(".icon").click(function () {
  $("span").toggleClass("cancel");
});

//////////////////////
//////preloader//////

$(document).ready(function () {
  //Preloader
  preloaderFadeOutTime = 500;
  function hidePreloader() {
    var preloader = $(".spinner-wrapper");
    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
});
