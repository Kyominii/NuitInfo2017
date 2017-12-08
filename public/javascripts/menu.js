$(document).bind("contextmenu", function (event) {
  event.preventDefault();
  $(".custom-menu").finish().toggle(100).
  css({
      top: event.pageY + "px",
      left: event.pageX + "px"
  });
});

$(document).bind("mousedown", function (e) {
  if (!$(e.target).parents(".custom-menu").length > 0) {
      $(".custom-menu").hide(100);
  }
});

$(".custom-menu li").click(function(){
  switch($(this).attr("data-action")) {
      case "boire": alert("boire"); break;
  }
  $(".custom-menu").hide(100);
});
