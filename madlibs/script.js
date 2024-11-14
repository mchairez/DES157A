(function(){
    'use strict';
    console.log('running js');

    const myform= document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myform.addEventListener('submit', function(event){
        event.preventDefault();
        //alert('form submitted');

        const verb= document.querySelector('#verb').value;
        const name= document.querySelector('#name').value;
        const verb2= document.querySelector('#verb2').value;
        const personal = document.querySelector('#personal').value;
        const verb3 = document.querySelector('#verb3').value;
        const verb4 = document.querySelector('#verb4').value;
        const noun = document.querySelector('#noun').value;
        const noun2 = document.querySelector('#noun2').value;
        const noun3 = document.querySelector('#noun3').value; 
        const noun4 = document.querySelector('#noun4').value; 
        let myText;

        if(verb === ''){
            myText = "Please provide a verb";
            document.querySelector('#verb').focus();
        }
        else if(name === ''){ 
            myText = "Please provide a name";
            document.querySelector('#name').focus();
        }
        else if(verb2 === ''){ 
            myText = "Please provide a verb (past tense)";
            document.querySelector('#verb2').focus();
        }
        else if(personal === ''){ 
            myText = "Please provide an personal item";
            document.querySelector('#personal').focus();
        }
        else if(verb3 === ''){ 
            myText = "Please provide a verb + ing ";
            document.querySelector('#verb3').focus();
        }
        else if(verb4 === ''){ 
            myText = "Please provide a verb (past tense)";
            document.querySelector('#verb4').focus();
        }
        else if(noun === ''){ 
            myText = "Please provide a food item";
            document.querySelector('#noun').focus();
        }
        else if(noun2 === ''){ 
            myText = "Please provide a noun";
            document.querySelector('#noun2').focus();
        }
        else if(noun3 === ''){ 
            myText = "Please provide an animal";
            document.querySelector('#noun3').focus();
        }
        else if(noun4 === ''){ 
            myText = "Please provide a noun";
            document.querySelector('#noun4').focus();
        }
        else{
            myText =`Dear Snoopy, I am out of reasons to ${verb}. Today, ${name} came to my school and ${verb2} my ${personal}. Then, the teacher asked if I could stop ${verb3} so loudly and the whole class ${verb4} without me. Then, I came home and someone ate all my ${noun} so I had to go to the ${noun2} store and see if they had any food. When I came home again, my ${noun3} had blown up my house and stole my last ${noun4}.`;
            document.querySelector('#verb').value ='';
            document.querySelector('#name').value ='';
            document.querySelector('#verb2').value ='';
            document.querySelector('#personal').value ='';
            document.querySelector('#verb3').value ='';
            document.querySelector('#verb4').value ='';
            document.querySelector('#noun').value ='';
            document.querySelector('#noun2').value ='';
            document.querySelector('#noun3').value ='';
            document.querySelector('#noun4').value='';
        }
        madlib.innerHTML = myText; 



    });
})();