const $navLinksContainer = $('#nav-links-container');
const $hamburger = $('.menu-image');
const $sideNav = $('.side-nav');
const $x = $('.x');
const $textBox = $('.text-box');
const $projectBox = $('.project-container');
const $projectText = $('.project-text');

//NAV MENU
$($hamburger).on('click', ()=>{
    $($sideNav).toggleClass('show-nav');
    $($hamburger).css('opacity', '0')
});

$($x).on('click', ()=>{
    $($sideNav).toggleClass('show-nav');
    $($hamburger).css('opacity', '1');
});

//PROJECTS SLIDER PANELS START
$($projectBox).on('click', (e)=>{
    $(e.target).toggleClass('show-description');
    console.log('clicked')
});
$($projectText).on('click', (e)=>{
    $(e.target).parent().parent().toggleClass('show-decription')
});

//LANDING PAGE OPENING SEQUENCE START
$('.hero').on('click', ()=>{
            $('.hero h1').css('pointer-events', 'none');
            $('.hero').css('cursor', 'default');
            $('.punctuation').fadeOut(()=>{
                $('.punctuation').text('. :-)').fadeIn();
            });
            setTimeout(nameAppear, 1000);
            setTimeout(jobAppear, 1600);
    });

//NAME APPEAR EFFECT
function nameAppear(){
    $('.hero h2').css('opacity', '1');
};

//JOB TITLE APPEAR EFFECT
function jobAppear(){
    $('.hero h3').css('opacity', '1');
};

//NAV APPEAR
function navAppear(){
    $('header').toggleClass('nav-appear');
};

//LANDING PAGE OPENING SEQUENCE END


//SHOW BIO PHOTO
function photoSlide(){
        $('.photo-container').parent().toggleClass('photo-appear');
}
// END SHOW BIO PHOTO


// SHOW BIO PARAGRAPH

function paraSlide(){
    $('.paragraph').parent().toggleClass('para-appear');
}

// END SHOW BIO PARAGRAPH

$(document).ready(paraSlide);



//EXECUTES PHOTO AND PARAGRAPH SLIDE ON BIO PAGE LOAD
$(document).ready(photoSlide);



//CONTACT FORM

// $('.email-button').on('click', ()=>{
//    $('.contact-form').css('display', 'block')
// })

//END CONTACT FORM
