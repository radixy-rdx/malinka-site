$(document).on('click','.spoiler-trigger',function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().find('.spoiler-block').first().slideToggle(300);});



$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    slidesToShow:1,
    
    autoplay: true,
    autoplaySpeed: 2000,

  });
});


console.log(1);



function welcome() {
  window.scrollTo({
    top:350,
    behavior: "smooth",
  });
}
function vnimanie() {
  window.scrollTo({
    top:1200,
    behavior: "smooth",
  });
}

function pyatD() {
  window.scrollTo({
    top:2200,
    behavior: "smooth",
  });
}

function dr() {
  window.scrollTo({
    top:4200,
    behavior: "smooth",
  });
}

function gl() {
  window.scrollTo({
    top:5800,
    behavior: "smooth",
  });
}

function price() {
  window.scrollTo({
    top:7300,
    behavior: "smooth",
  });
}

function feedback() {
  window.scrollTo({
    top:8700,
    behavior: "smooth",
  });
}

function contact() {
  window.scrollTo({
    top:9500,
    behavior: "smooth",
  });
}


function head_arrow() {
  window.scrollTo({
    top:0,
    behavior: "smooth",
  });
}



function submit(){
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  alert('Ваш номер телефона: '+ phone  + '\nВаша почта: ' + email + 
    '\nОжидайте звонка!');
}
