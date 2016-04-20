var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.navMenuIconBg').click(function() {
// $('.navMenuSlidebar').toggle();


        $(".navMenuSlidebar").animate({
            width: "toggle"
        });


  });
};


$(document).ready(main);
