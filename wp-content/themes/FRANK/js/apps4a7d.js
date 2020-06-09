jQuery(document).ready(function($) {

  //SCROLL FUNCTION
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('.f_logo').fadeOut(400);

        setTimeout(function(){
            $('.f_logo').css({
                'top': 'auto',
                'bottom': 20 + 'px'
            });
            $('.f_logo').fadeIn(400).addClass('bottom');
          }, 410);

      } else {

        if ($('.f_logo').hasClass('bottom')) {
          $('.f_logo').fadeOut(400);

          setTimeout(function(){
            $('.f_logo').css({
                'bottom': 'auto',
                'top': 20 + 'px'
            });
              $('.f_logo').fadeIn(400).removeClass('bottom');
          }, 410);
        }
      }
   });

   //DESKTOP LOGO HOVER FUNCTION
   $('.h_logo, .f_logo').hover(function(){
      $('.h_logo img, .f_logo img').css('opacity', '.5');
    }, function(){
      $('.h_logo img, .f_logo img').css('opacity', '1');
    });

    //MOBILE LOGO HOVER FUNCTION
    $('.m_logo').hover(function(){
       $('.m_logo').css('opacity', '.5');
     }, function(){
       $('.m_logo').css('opacity', '1');
     });

    //HIDE EMPTY P TAGS
    $('p').each(function() {
      var $this = $(this);
      if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
          $this.remove();
    });

});
