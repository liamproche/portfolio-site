console.log('hello')
$('.description-box').on('click', (e)=>{
    $(e.target).parent().toggleClass('show-description')
    alert('clicked')
})