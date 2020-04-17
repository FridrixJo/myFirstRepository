"use strict"
window.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.box'),
          carts = document.querySelectorAll('.cart'),
          text = document.querySelector('.title'),
          click = document.querySelector('.smd'),
          kosmos = document.querySelector('.jpg'),
          click2 = document.querySelector('.smd2'),
          kosmos2 = document.querySelector('.jpg2');


          

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
                 text.textContent = 'i am sucking dicks now';
            });
        }

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('mouseleave', function(){
                 text.textContent = 'what are you doing?';
            });
        }

        kosmos.addEventListener('mouseenter', function(){
            click.style.display = 'block';
        });
        kosmos.addEventListener('mouseleave', function(){
            click.style.display = 'none';
        });

        kosmos2.addEventListener('mouseenter', function(){
            click2.style.display = 'block';
        });
        kosmos2.addEventListener('mouseleave', function(){
            click2.style.display = 'none';
        });
        

});

/*<h1 class="title">what are you doing?</h1>
    <div class="all">
    <div class="container">
    <div class="box">suck</div>
    <div class="box">my</div>
    <div class="box">dick</div>
    </div>

    <div class="cont">
        <div class="cart">my dick</div>
        <div class="cart">dick suck</div>
        <div class="cart">suck my</div>
        </div>
    </div>
*/