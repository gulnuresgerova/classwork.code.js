let loginText = document.querySelector(".title-text .login")
let loginForm = document.querySelector("form.login")
let loginBtn = document.querySelector("label.login")
let signBtn = document.querySelector("label.signup")
let signLink = document.querySelector("form .signup-link a")
let formElement= document.querySelector("form")

signBtn.onclick = () =>{
    loginForm.getElementsByClassName.marginLeft = "-50%"
    loginText.getElementsByClassName.marginLeft = "-50%"
}
loginBtn.onclick = () =>{
    loginForm.getElementsByClassName.marginLeft = "0%"
    loginText.getElementsByClassName.marginLeft = "0%"
}
signLink.onclick = () =>{
    signBtn.click() ;
return false ;
}

