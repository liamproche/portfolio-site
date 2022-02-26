console.log('hello');
const $landingPageText = $('.landing-page-text');
const $navLinksContainer = $('#nav-links-container');
const $hamburger = $('.menu-image');
const $sideNav = $('.side-nav');
const $x = $('.x')



$('.description-box').on('click', (e)=>{
    $(e.target).parent().toggleClass('show-description');
});

$($landingPageText).on('click', ()=>{
    $('#nav-links-container').css('opacity', 1);  
});

$($hamburger).on('click', ()=>{
    $($sideNav).toggleClass('show-nav');
});
$($x).on('click', ()=>{
    $($sideNav).toggleClass('show-nav')
})
