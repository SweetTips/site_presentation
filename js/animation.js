//declanche au bon niveau de scroll l'effet de blur en background
$(window).scroll(function(){

    let position_scroll = $(document).scrollTop();

    if(position_scroll > 600)
    {
        $('body').addClass('blurback');
    }
    else
    {
        $('body').removeClass('blurback');
    } 
});

$('.container').on( 'click', '#menu-icon, .cat', function(){
    $('#page').fadeToggle();
    $('.menu').fadeToggle();
});
