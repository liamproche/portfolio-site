console.log('hello');
const $landingPageText = $('.landing-page-text');
const $navLinksContainer = $('#nav-links-container');
const $hamburger = $('.menu-image');
const $sideNav = $('.side-nav');
const $x = $('.x')
const $textBox = $('.text-box');
const $projectBox = $('.project-container');
const $projectText = $('.project-text')




$('.description-box').on('click', (e)=>{
    $(e.target).parent().toggleClass('show-description');
});

$($landingPageText).on('click', ()=>{
    $('#nav-links-container').css('opacity', 1);  
});

$($hamburger).on('click', ()=>{
    $($sideNav).toggleClass('show-nav');
    $($hamburger).css('opacity', '0')
});

$($x).on('click', ()=>{
    $($sideNav).toggleClass('show-nav');
    $($hamburger).css('opacity', '1');
})




function changeQuestionMark(){
$('.hero h1').on('click', function(){
        console.log('clicked')
        // GET BETTER FONT FOR THIS
        $('.punctuation').text(' :-)')
        nameAppear();
        jobAppear();
    })
}

function nameAppear(){
    $('.hero h2').toggleClass('second-appear');
}

function jobAppear(){
    $('.hero h3').toggleClass('third-appear');
}

changeQuestionMark();

$($projectBox).on('click', ()=>{
    $($projectBox).toggleClass('show-description');
    console.log('clicked');
})