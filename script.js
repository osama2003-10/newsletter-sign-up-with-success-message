const form = document.getElementById('form');
const error = document.getElementById('error');
const card = document.getElementById('card-page');
const thanks = document.getElementById('thanks');
const email = document.getElementById('email');
const button = document.getElementById('button');
const buttonTh = document.getElementsByClassName('but')[0];



function forming (e){
    
    e.preventDefault();

    const as = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let v = true ;
    if(!email.value.trim()){
        error.classList.remove('error');
        v = false
        
    }else if(!as.test(email.value)){
        error.classList.remove('error');
        v = false
    }

    if(v){
        card.classList.add('nones');
        thanks.classList.remove('nones');
        document.getElementById('oo').textContent = email.value;
        


    }

}
button.addEventListener('click', forming);
buttonTh.addEventListener('click' , function() {
    card.classList.remove('nones');
    thanks.classList.add('nones');
    error.classList.add('error');
    email.value = '';

});

