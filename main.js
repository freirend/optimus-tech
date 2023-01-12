const menu = document.querySelector('#menu');
const burguer = document.querySelector('#burguer');


burguer.addEventListener('click', ()=>{
    if (menu.style.display === 'flex'){
        menu.style.display = 'none';
    } else{
        menu.style.display = 'flex';
    }
});

function mudouTamanho(){
    if (window.innerWidth > 800){
        menu.style.display = 'flex'
    }else{
        menu.style.display = 'none'
    }
}