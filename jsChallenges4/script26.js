(function(){
    'use strict';
    console.log('running js');

    document.addEventListener('DOMContentLoaded', function(){
        const divTag = document.querySelector('div');
        const btnAdd = document.querySelectorAll('button')[0];
        const btnDelete = document.querySelectorAll('button')[1];
        let numOfPs = 1; 

        btnAdd.addEventListener('click', function(){
            numOfPs++;
            const newP = document.createElement('p');
            const pText = document.createTextNode(
                `This is paragraph number ${numOfPs}`);
            newP.appendChild(pText);
            divTag.appendChild(newP);
        });

        btnDelete.addEventListener('click',function(){
            if(numOfPs > 1) {
                divTag.removeChild(divTag.children[numOfPs-1]);
                numOfPs--;
            } else {
                alert("don't delete the last paragraph")
            }});

        }); 
})();      