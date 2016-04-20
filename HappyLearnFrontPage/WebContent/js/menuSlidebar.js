var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.navMenuIconBg').click(function() {
// $('.navMenuSlidebar').toggle();
$('.navMenuSlidebar').show("slide", { direction: "left" }, 1000);
  });
};


$(document).ready(main);
