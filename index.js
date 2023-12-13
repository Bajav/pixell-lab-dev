// $(".click-view").hide();

// const slideIn=()=>
// {
//   $(".wrapped").css("transform","translatey(0%)");
//   $(".wrapped").css("transition", "all 1s");
// }
$(".tag-me").click(slideIn);
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
    // fadeIn(4000,hideView);

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
    $('.nav-links').css("transform", "translateY(-98%)");
    $('body').css("overflow","visible");
}

$('.burger-1').click(hide);

// const nextSlide = () => {
//     const current = document.querySelector('.active');
//     // Remove class 'current'
//     current.classList.remove('active');
//     if (current.nextElementSibling) {
//       current.nextElementSibling.classList.add('active');
//     } else {
//       slides[0].classList.add('active');
//     }
//     // setTimeout(() => {
//     //   current.classList.remove('current');
//     // }, 1000);
//   };

  // const prevSlide = () => {
  //   const current = document.querySelector('.active');
  //   Remove class 'current'
  //   current.classList.remove('active');
  //   if (current.previousElementSibling) {
  //     current.previousElementSibling.classList.add('active');
  //   } else {
  //     slides[slides.length - 0].classList.add('active');
  //   }
  //   setTimeout(() => {
  //     current.classList.remove('current');
  //   }, 1000);
  // };  

// $('.btn1').click(prevSlide);
// $('.btn2').click(nextSlide);