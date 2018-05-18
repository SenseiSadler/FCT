// This must be used for any jQuery to work
// Think of this like a <html>
$(document).ready(function(){

  //--------------//
  //navbar scripts//
  //--------------//

  //if .nav-btn is clicked
    //slide up or down

  $('.nav-btn').click(function(){
    $('.nav-links').slideToggle();
  });

  //fix hidden issue when resizing
  $(window).resize(function(){
    if ($(window).width() > 500) {
      $('.nav-links').show();
    } else {
      $('.nav-links').hide();
    }
  })
});
