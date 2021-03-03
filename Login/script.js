const heading = document.querySelector('#text');
const username = document.querySelector('#user');
const password = document.querySelector('#pass');
const hold_user = document.querySelector('.username')
const hold_pass = document.querySelector('.password')

hold_user.addEventListener('mousemove',(e)=>{
    hold_user.style.transform = 'translateX(50px)'
})

hold_pass.addEventListener('mousemove',(e)=>{
    hold_pass.style.transform = 'translateX(50px)'
})

hold_user.addEventListener('mouseleave',(e)=>{
    hold_user.style.transform = 'translateX(0px)'
})

hold_pass.addEventListener('mouseleave',(e)=>{
    hold_pass.style.transform = 'translateX(0px)'
})


