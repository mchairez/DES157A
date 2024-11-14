(function(){
    'use strict';
    console.log('reading JS');

    const googleLink = document.querySelector('#link');
    const video = document.querySelector('#video');

    googleLink.addEventListener('click', function(event){
        event.preventDefault(); 
        video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/msSc7Mv0QHY?si=NYSqnWsI5_oDTPYC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    });
})();