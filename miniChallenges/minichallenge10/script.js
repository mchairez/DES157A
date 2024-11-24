(function(){
    'use strict'
    console.log('running js');

    const divs = document.querySelectorAll('div');
    const myBody = document.querySelector('body');

    for (let i = 0; i < divs.length; i++){
        divs[i].addEventListener('mouseover', function(){
            let box = divs[i].id; 
            console.log(`mousing over ${box}`);

            if (box === 'box1') {
                myBody.classList.add('pagecolor2');
                myBody.classList.remove('pagecolor3', 'pagecolor1');
            } else if (box == 'box2'){
                myBody.classList.add('pagecolor3');
                myBody.classList.remove('pagecolor2', 'pagecolor1');
            } else {
                myBody.classList.add('pagecolor1');
                myBody.classList.remove('pagecolor2', 'pagecolor3');
            }
        })

        divs[i].addEventListener('mouseout', function(){
            myBody.classList.add('pagecolor1');
            myBody.classList.remove('pagecolor2', 'pagecolor3');
            let box = divs[i].id; 
            console.log(`mousing out ${box}`);
        });
    }

})(); 