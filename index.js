let userName = document.getElementById("username");
let passWord = document.getElementById("password");
let form = document.getElementById("form");
let errorMessage = document.getElementById("errorMessage");
form.addEventListener("submit", (e) =>{
    let message = [];
    if (userName.value === "" || userName.value === null){
        message.push("Name is required")
    }
    if (passWord.value.length <= 6 || passWord.value.length >= 20 ){
        message.push("Password must be more than 6 characters and must be less than 20 characters")
    }
    if (message.length > 0){
        e.preventDefault()
        errorMessage.innerText = message.join(",  ")

    }
    
})