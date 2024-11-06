// add IIFE and your script here...

(function () {
    'use strict';
    console.log('running js');

    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');
    
    header.addEventListener('mouseover',function(){
        h1.className='rotate';
    });

    header.addEventListener('mouseout',function(){
        h1.removeAttribute('class');
    });


})();