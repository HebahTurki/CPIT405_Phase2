// TASK1
// a: add Focus on form fields
function focusFunction(id) {
    if(id == "name"){
        document.getElementById(id).placeholder = "Enter your name";  
       
    }
    if(id == "email"){
        document.getElementById(id).placeholder = "Enter your Email";   
    }
    if(id == "message"){
        document.getElementById(id).placeholder = "Feel Free to write your feedback!"; 
    }

    if(id == "feedback-type"){
        document.getElementById(id).style.backgroundColor = "black";  
    }
}
function blurFunction(id) {
    if(id == "name"){
        document.getElementById(id).placeholder = "";  
       
    }
    if(id == "email"){
        document.getElementById(id).placeholder = "";   
    }
    if(id == "message"){
        document.getElementById(id).placeholder = ""; 
    }

    if(id == "feedback-type"){
        document.getElementById(id).style.backgroundColor = "";  
    }
}
// c: add Confirmation to form submition
function init(){
var form = document.getElementById("form");
form.addEventListener("submit", 
    function(){
        return confirm ("Are You Sure You Want To Send Your Feedback?");
    }, false );
    
form.addEventListener("reset", 
        function(){
            return confirm ("Are You Sure You Want To reset the form?");
        }, false );
    

 }
window.addEventListener("load", init , false)