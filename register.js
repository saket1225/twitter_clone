var register = document.querySelector(".background")

var change = document.querySelector(".change")
var phone = document.querySelector(".phone_text")


function showRegisterModel(){
    register.style.display = 'block'
}

function changer(){
    if (change.innerText == "Use Email Instead") {
        change.innerText = "Use Phone Instead"
        phone.innerText = "Email"
    }

    else{
        change.innerText = "Use Email Instead"
        phone.innerText = "Phone"
    }

}

for (i = 2021; i > 1900; i--) {
    var option = document.createElement('option')
    option.textContent = i;
    document.querySelector(".year").append(option)

}

for (i = 1; i < 32; i++) {
    var option = document.createElement('option')
    option.textContent = i;
    document.querySelector(".date").append(option)

}

function hideRegisterModel(){
    register.style.display = 'none'
}

