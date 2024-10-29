(function(){
    'use strict';
    console.log('running js');

    document.addEventListener('DOMContentLoaded', function(){
        const divTag = document.querySelector('div');

        divTag.addEventListener('mouseover', function(){
            divTag.className="big";
        });

        divTag.addEventListener('mouseout', function(){
            divTag.removeAttribute('class');
        });
    }); 
})();
