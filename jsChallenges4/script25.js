(function(){
    'use strict';
    console.log('running js');

    document.addEventListener('DOMContentLoaded', function(){
        const divTag = document.querySelector('div');
        const btnAdd = document.querySelectorAll('button')[0];
        const btnDelete = document.querySelectorAll('button')[1];

        btnAdd.addEventListener('click', function(){

            const newP = document.createElement('p');
            const pText = document.createTextNode('a new paragraph');
            newP.appendChild(pText);
            divTag.appendChild(newP);
        });

        btnDelete.addEventListener('click',function(){
            const allPs = document.querySelectorAll('p');
            divTag.removeChild(divTag.children[allPs.length-1]);
        
        })});
})();