$('h1').hide();
$('p').hide();
$(document).ready(function() {
    $('h1').slideDown(5000).fadeIn(5000);
});
$(document).ready(function() {
    $('p').fadeIn(9000);
});
function transy() {
    $('.nav-links').css({
        "transform": "translatey(0)",
        "z-index": "10",
        "color": "white"
    });
}
$('.burger').click(transy);
function hide(){
    $('.nav-links').css("transform","translatey(-100%)")
}
$('.burger-1').click(hide);