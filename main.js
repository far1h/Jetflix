let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

function validateData(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var date = document.getElementById("date");
    var password = document.getElementById("password");
    var confirmpassword = document.getElementById("confirmpassword");
    var gender = document.getElementById("gender");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var agreement = document.getElementById("agreement");
    // email format
    if(email.value==""){
        alert("Enter an email address");
    }
    else if(email.value!=""&&!email.value.endsWith("@gmail.com")&&!email.value.endsWith("@yahoo.com")&&!email.value.endsWith("@outlook.com")&&!email.value.endsWith("@hotmail.com")&&!email.value.endsWith("@binus.ac.id")){
        alert("Invalid email address");
    }
    // isempty name
    else if(name.value==""){
        alert("Enter a name");
    }
    // isempty date
    else if(date.value==""){
        alert("Enter a date");
    }    
    else if(password.value==""){
        alert("Enter a password");
    }
    // password length
    else if(password.value.length < 5){
        alert("Password has to be more than 5 characters");
    }
    // confirm password
    else if(password.value != confirmpassword.value){
        alert("Password doesn't match");
    }
    //gender
    else if(gender.value!="male"&&gender.value!="female"){
        alert("Choose a gender");
    }
    // agreement
    else if(!agreement.checked){
        alert("You have to agree to the terms and services");
    }
    else{
        alert("Registration Successful")
    }

}