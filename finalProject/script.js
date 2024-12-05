window.addEventListener('load', function () {
    'use strict';
    const sliderContent = document.querySelector('.a');
    const sliderWidth = sliderContent.offsetWidth;
    const cloned = sliderContent.cloneNode(true);
    cloned.className = "b";

    document.querySelector('.slider').appendChild(cloned);

    
    
    const root = document.querySelector(':root');
    const endLeftPos = `-${sliderWidth}px`;  
    root.style.setProperty('--sliderwidth', endLeftPos);


    document.querySelector('.slider').classList.add("animate");
    document.querySelector('.slider').addEventListener('mouseover', function(){
        document.querySelector('.animate').style.animationPlayState = 'paused';
    });

    
    document.querySelector('.slider').addEventListener('mouseout', function(){
        document.querySelector('.animate').style.animationPlayState = 'running';
    });

    const closeBtns = document.querySelectorAll('.close');

    
    document.addEventListener('click', function(event){
        if(event.target.className == 'coverA'){
            console.log(event.target.src);
            const imgSrc = event.target.src;
            const lastSlash = imgSrc.lastIndexOf('/');
            const lastDot = imgSrc.lastIndexOf('.');
            const filename = imgSrc.substring(lastSlash+1, lastDot);
            console.log(filename);
            document.getElementById(`${filename}`).className = 'overlay showing';
        }
    } );

    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelector('.showing').className = 'overlay hidden';
        }
    });
});