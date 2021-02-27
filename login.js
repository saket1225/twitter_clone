var type_of_password = document.querySelector(".password")
var show_hide_text = document.querySelector(".show_hide")

function changer() {
    if (type_of_password.type == "password") {
        type_of_password.type = "text"
        show_hide_text.innerHTML = "Hide"
    }

    else{
        type_of_password.type = "password"
        show_hide_text.innerHTML = "Show"
    }
}
