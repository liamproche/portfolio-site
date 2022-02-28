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
function changeQuestionMark(){
    $('.hero h1').on('click', function(){
            console.log('clicked');
            // GET BETTER FONT FOR THIS
            $('.punctuation').text('. :-)');
            nameAppear();
            jobAppear();
            $('.hero h1').css('pointer-events', 'none');
    })
}


//for name appear effect
function nameAppear(){
    $('.hero h2').toggleClass('second-appear');
};


//for job appear effect
function jobAppear(){
    $('.hero h3').toggleClass('third-appear');
};

   
//calls first event in landing page sequence
changeQuestionMark();

//LANDING PAGE OPENING SEQUENCE END