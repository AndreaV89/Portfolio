$(document).ready(function(){
    $('.menu').click(function(){
        $('.main-nav').slideToggle(200);
        $('.main-nav').css('display' , 'flex');
    });
})