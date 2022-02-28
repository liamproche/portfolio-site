//checks javascript is working

console.log('hello');

// const $landingPageText = $('.landing-page-text');
const $navLinksContainer = $('#nav-links-container');
const $hamburger = $('.menu-image');
const $sideNav = $('.side-nav');
const $x = $('.x');
const $textBox = $('.text-box');
const $projectBox = $('.project-container');
const $projectText = $('.project-text');




//START NAV MENU

$($hamburger).on('click', ()=>{
    $($sideNav).toggleClass('show-nav');
    $($hamburger).css('opacity', '0')
});

$($x).on('click', ()=>{
    $($sideNav).toggleClass('show-nav');
    $($hamburger).css('opacity', '1');
});

//END NAV MENU


//PROJECTS SLIDER PANELS START
$($projectBox).on('click', (e)=>{
    $(e.target).toggleClass('show-description');
    console.log('clicked')
});
$($projectText).on('click', (e)=>{
    $(e.target).parent().parent().toggleClass('show-decription')
})


//LANDING PAGE OPENING SEQUENCE START
    $('.hero h1').on('click', ()=>{
            console.log('clicked');
            $('.hero h1').css('pointer-events', 'none');
            $('.punctuation').fadeOut(()=>{
                $('.punctuation').text('. :-)').fadeIn();
            });
            setTimeout(nameAppear, 1000)
            setTimeout(jobAppear, 1800);
    })


//for name appear effect
function nameAppear(){
    $('.hero h2').toggleClass('second-appear');
};


//for job appear effect
function jobAppear(){
    $('.hero h3').toggleClass('third-appear');
};




//LANDING PAGE OPENING SEQUENCE END