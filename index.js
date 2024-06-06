let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slidi').appendChild(items[0])
})
