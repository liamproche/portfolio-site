console.log('hello')
const $landingPageText = $('.landing-page-text')
const $navLinksContainer = $('#nav-links-container')



$('.description-box').on('click', (e)=>{
    $(e.target).parent().toggleClass('show-description')
})

$($landingPageText).on('click', ()=>{
    $('#nav-links-container').css('opacity', 1)
})

