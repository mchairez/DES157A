(function(){
    'use strict';
    console.log('running js');

    document.addEventListener('DOMContentLoaded', function(){
        const divTag = document.querySelector('div');
        const btn = document.querySelector('button');

        btn.addEventListener('click', function(){

            const newP = document.createElement('p');
            const pText = document.createTextNode('a new paragraph')
            newP.appendChild(pText);
            divTag.appendChild(newP);
        });
    });

})();
   