(function(){
    'use strict';
    console.log('running js');

    document.addEventListener('DOMContentLoaded', function(){
        const pTag = document.querySelector('p');
        const btn = document.querySelector('button');

        btn.addEventListener('click', function() {
            pTag.style.color = "green";
        });
    }); 

})();