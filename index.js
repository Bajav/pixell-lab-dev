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
// buttons fnc
// add class active

const nextProject = () => {
    const gallery = document.querySelector('.gallery');
    const activeClass = document.querySelector('.active');
    
    if (activeClass) {
        activeClass.classList.remove('active');
        if (activeClass.nextElementSibling) {
            activeClass.nextElementSibling.classList.add('active'); 
        } else {
            gallery.children[0].classList.add('active');
        }
    }
}

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', nextProject);
