$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.main-nav').slideToggle(200);
        $('.main-nav').css('display' , 'flex');
    });
})

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['homepage','projects','about','contact'],
        sectionsColor: ['#111111','#111111','#111111','#111111'],
        loopBottom: true,
    });
});



    