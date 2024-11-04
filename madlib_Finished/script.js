(function(){
    'use strict';
    console.log('running js');

    const myform=document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myform.addEventListener('submit', function(event){
        event.preventDefault();
        //alert('form submitted');

        const verb= document.querySelector('#verb').value;
        const noun= document.querySelector('#noun').value;
        const verb2= document.querySelector('#verb2').value;
        const adj= document.querySelector('#adj').value;

        let myText;
        //console.log(noun1);

        if(verb == ''){
            myText = "Please provide a verb";
            document.querySelector('#verb');focus();
        }
        else if(noun == ''){ 
            myText = "Please provide a noun";
            document.querySelector('#noun');focus();
        }
        else if(verb2 == ''){ 
            myText = "Please provide a verb (past tense)";
            document.querySelector('#verb2');focus();
        }
        else if(adj == ''){ 
            myText = "Please provide an adjective";
            document.querySelector('#adj');focus();
        }
        else{
            myText =`Here are the words you've submitted: ${verb}, ${noun}, ${verb2}, and ${adj}`;
            document.querySelector('#verb').value ='';
            document.querySelector('#noun').value ='';
            document.querySelector('#verb2').value ='';
            document.querySelector('#adj').value ='';
        }
        madlib.innerHTML = myText; 



    });
})();