let about = document.body.querySelector('#about')
let x = (event)=>{
    let container2 = document.body.querySelector('.container2')
    container2.style.display = 'none'
    let fwi = document.body.querySelector('#fwi')
    fwi.style.display = 'none'
    let contact = document.body.querySelector('.contact')
    contact.style.display = 'none'
}
about.addEventListener('click', x)

let y = (event)=>{
    let parent = document.body.querySelector('.about_me')
    parent.style.display = 'block'
    
}
about.addEventListener('click', y)

let z = ()=>{

    let body = document.body
    body.style.backgroundImage = 'url("blank2.jpg")'
    // body.style.backgroundColor = '#FEF8DE'
    
}
about.addEventListener('click', z)

let contact = document.body.querySelector('#contact')
let a = ()=>{
    let container2 = document.body.querySelector('.container2')
    container2.style.display = 'none'
    let fwi = document.body.querySelector('#fwi')
    fwi.style.display = 'none'  
    let about_me = document.body.querySelector('.about_me')
    about_me.style.display = 'none' 
}
contact.addEventListener('click', a)

let b = ()=>{
    let parent = document.body.querySelector('.contact')
    parent.style.display = 'grid'
}
contact.addEventListener('click', b)
contact.addEventListener('click', z)

let burger = document.body.querySelector('.burger')
let container = document.body.querySelector('.container')
let bada = document.body.querySelector('.bada')
let j = ()=>{
    container.classList.toggle('container-resp')
    container.classList.toggle('transition-resp')
    
}
burger.addEventListener('click', j)

function myFunction(x) {
    x.classList.toggle("change");
  }
