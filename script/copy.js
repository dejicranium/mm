function copy(copyId) {
  var $inp = $("<input>");
  $("body").append($inp);
  $inp.val($("" + copyId).text()).select();
  document.execCommand("copy");
  $inp.remove();
  $(".alert").fadeIn(500, function () {
    $(".alert").fadeOut();
  });
}
$(document).ready(function () {
  $("#copyButton1").click(function () {
    copy("#text1");
  });
  $("#copyButton2").click(function () {
    copy("#text2");
  });
  $("#copyButton3").click(function () {
    copy("#text3");
  });
});
