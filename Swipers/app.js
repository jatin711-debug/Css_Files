const card_1 = document.querySelector(".card-1")
const card_2 = document.querySelector(".card-2")
const card_3 = document.querySelector(".card-3")
const cover_1 = document.querySelector('.cover-1')
const cover_2 = document.querySelector('.cover-2')
const cover_3 = document.querySelector('.cover-3')

card_1.addEventListener('mousemove', e =>{
    cover_1.style.transform  = "translateY(-150px) rotate(-36deg)"
})

card_1.addEventListener('mouseleave', e =>{
    cover_1.style.transform  = "translateY(0px)"
})

card_2.addEventListener('mousemove', e =>{
    cover_2.style.transform  = "translateY(-150px)"
})

card_2.addEventListener('mouseleave', e =>{
    cover_2.style.transform  = "translateY(0px)"
})

card_3.addEventListener('mousemove', e =>{
    cover_3.style.transform  = "translateY(-150px) rotate(36deg)"
})

card_3.addEventListener('mouseleave', e =>{
    cover_3.style.transform  = "translateY(0px)"
})

