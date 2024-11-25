(function () {
    'use strict';
    console.log('reading js');

    const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg =  document.querySelector('div img');

    hotSpots.forEach(function(eachSpot) {
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function (){
            theImg.className = 'start'; 
        });
    });

    function zoomPhoto(event) {
        const thisCorner = event.target.id; 
        console.log(thisCorner); 
        switch(thisCorner) {
            case 'topleft': theImg.className = 'topleft'; break; 
            case 'topright': theImg.className = 'topright'; break; 
            case 'bottomleft': theImg.className = 'bottomleft'; break; 
            case 'bottomright': theImg.className = 'bottomright'; break; 
            case 'center': theImg.className = 'center'; break; 
        }
    }

    document.querySelectorAll('.open').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const overlayId = link.getAttribute('data-overlay');
            const overlay = document.querySelector(`#${overlayId}`);
            overlay.classList.remove('hidden');
            overlay.classList.add('showing');
        });
    });

    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', () => {
            const overlay = button.closest('.overlay');
            overlay.classList.remove('showing');
            overlay.classList.add('hidden');
        });
    });


})();