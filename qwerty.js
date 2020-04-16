"use strict"
window.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.box'),
          carts = document.querySelectorAll('.cart'),
          text = document.querySelector('.title'),
          click = document.querySelector('.smd');

          

          for ( let i = 0 ; i < buttons.length ; i++) {
            buttons[i].addEventListener('click', function(){
                carts[i].style.display = 'block';
           });
            };

            for ( let i = 0 ; i < buttons.length ; i++) {
                carts[i].addEventListener('click', function(){
                    carts[i].style.display = 'none';
               });
                };

            for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('mouseenter', function(){
                 text.textContent = 'suck my dick',
                 click.style.display = 'block';
            });
        }

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('mouseleave', function(){
                 text.textContent = 'what are you doing?',
                 click.style.display = 'none';
            });
        }
        

});