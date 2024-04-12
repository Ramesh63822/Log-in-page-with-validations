var form = document.getElementById("form")
var username = document.getElementById("username")
var email = document.getElementById("email")
var password1 = document.getElementById("password1")
var password2 = document.getElementById("password2")

form.addEventListener('submit' , (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    // get the values from inputs

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value =  password1.value.trim();
    const password2Value =  password2.value.trim();

    if(usernameValue === ""){
        // show error - add error class
        setError(username, 'Username cannot be blank')
    }
    else{
        // add success class
        setSuccess(username);
    }


    if(emailValue === "")
    {
        setError(email, 'email cannot be blank')
    }
    else if (!isEmail(emailValue)){
        setError(email, 'Email is not valid')        
    }
    else{
        setSuccess(email);
    }

    if(password1Value === ""){
        // show error - add error class
        setError(password1, 'Password cannot be blank')
    }
    else{
        // add success class
        setSuccess(password1);
    }

    if(password2Value === ""){
        // show error - add error class
        setError(password2, 'Password cannot be blank')
    }
    else if(password1Value !== password2Value){
        setError(password2, 'Password does not match')
    }
    else{
        // add success class
        setSuccess(password2);
    }
    
}


function setError(input , message){
    const formcontrol = input.parentElement; // .form-control
    document.querySelector('p').innerText = message ;

    // add error class
    formcontrol.className = 'form-control error';

}

function setSuccess(input){
    const formcontrol = input.parentElement; // .form-control
    // add success class
    formcontrol.className = 'form-control success';

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}