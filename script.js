const menu =document.querySelector('.menu');
const menulist =document.querySelector('.home .menubar ul')
menu.addEventListener('click',()=>{

	menulist.classList.toggle('showmenu');
})
