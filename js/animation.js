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
    $('#menu').fadeToggle();
    $('#menu-competences').fadeToggle();
});

$('.container').on( 'click', '#button-profil', function(){
    $('#menu-profil').addClass('translate');
    $('#menu-competences').addClass('translate');

    $('#button-profil').addClass('active');
    $('#button-competences').removeClass('active');
});

$('.container').on( 'click', '#button-competences', function(){
    $('#menu-profil').removeClass('translate');
    $('#menu-competences').removeClass('translate');

    $('#button-profil').removeClass('active');
    $('#button-competences').addClass('active');
});
