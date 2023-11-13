$(document).ready(function() {
    $('h1').hide();
    $('p').hide();
    $('h1').slideDown(5000).fadeIn(5000);
    $('p').fadeIn(9000);
    $(".blink1").hide();
    $(".blink2").hide();
    $(".blink3").hide();
    $(".blink1").fadeIn(3000);
    $(".blink2").fadeIn(8000);
    $(".blink3").fadeIn(10000);

});

function transy() {
    $('.nav-links').css({
        "transform": "translateY(0)",
        "z-index": "10",
        "color": "white"
    });

    $('body').css("overflow","hidden");
}

$('.burger').click(transy);

function hide() {
    $('.nav-links').css("transform", "translateY(-100%)");
    $('body').css("overflow","visible");
}

$('.burger-1').click(hide);

const nextProject = () => {
    const gallery = $('.gallery');
    const activeClass = $('.active');

    if (activeClass.length > 0) {
        activeClass.removeClass('active');
        if (activeClass.next().length > 0) {
            activeClass.next().addClass('active');
        } else {
            gallery.children().first().addClass('active');
        }
    }
}

const prevProject = () => {
    const gallery = $('.gallery');
    const activeClass = $('.active');

    if (activeClass.length > 0) {
        activeClass.removeClass('active');
        if (activeClass.prev().length > 0) {
            activeClass.prev().addClass('active');
        } else {
            gallery.children().last().addClass('active');
        }
    }
}

$('.btn1').click(prevProject);
$('.btn2').click(nextProject);