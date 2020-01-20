$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.main-nav').slideToggle(200);
        $('.main-nav').css('display' , 'flex');
    });
})