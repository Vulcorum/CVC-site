$(function() {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 // удаляем отступ у body, равный высоте шапки
       })
      }
      if($(this).scrollTop() > 1) {
        $('.header').css({
          'height': '100px',
          'background': 'white',
        });
    } else {
        $('.header').css({
           'height': '140px',
          'padding': '15px 0',
          'background': 'black',

          'transition': '.3s'
        });
    }
    });
   });
