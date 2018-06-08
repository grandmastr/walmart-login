function checkpassword(){
    var password = document.getElementById('password');
    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}
var showPass = document.getElementById('showpassword');
showPass.addEventListener('click',checkpassword,false);