
window.addEventListener('load', function () {
    'use strict';

    function animateSlider(element, direction){
        const sliderContent = document.querySelector(`${element} .a`);
        const sliderWidth = sliderContent.offsetWidth;
        const cloned = sliderContent.cloneNode(true);
        cloned.className = "b";


        document.querySelector(`${element} .slider`).appendChild(cloned);


        let root = document.querySelector(':root');
        const endLeftPos = `-${sliderWidth}px`;    
        root.style.setProperty('--sliderwidth', endLeftPos);
        document.querySelector(`${element} .slider`).classList.add(`${direction}`);
    }



    //document.querySelector('.slider').classList.add("animate");
    const sliders = document.querySelectorAll(".slider");
    for (const eachSlider of sliders) {
        eachSlider.addEventListener('mouseover', function(){
            if (eachSlider.classList.contains("right")) {
                document.querySelector('.right').style.animationPlayState = 'paused';
            }
            else {
                //alert("left");
                document.querySelector('.left').style.animationPlayState = 'paused';
            }
        });
           
        eachSlider.addEventListener('mouseout', function(){
            if (eachSlider.classList.contains("right")) {
                document.querySelector('.right').style.animationPlayState = 'running';
            }
            else {
                document.querySelector('.left').style.animationPlayState = 'running';
            }
        });
    }


    
    const closeBtns = document.querySelectorAll('.close');

    
    document.addEventListener('click', function(event){
        if(event.target.className == 'cover'){
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

    animateSlider('#one', 'left');
    animateSlider('#two', 'right');
    animateSlider('#three', 'left');
    
});