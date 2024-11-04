(function(){
    'use strict';
    console.log('running js');
    
    document.addEventListener('DOMContentLoaded', function(){
    const liTags = document.querySelectorAll('li');
    const btn = document.querySelector('button');
    
    
    btn.addEventListener('click', function() {
        for (var i=0; i<liTags.length; i++) {
        liTags[i].style.color = "green";
        }});
    });

})();