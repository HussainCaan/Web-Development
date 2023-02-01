const button = document.getElementById("btn")

const usersname = ["Hussain", "Hassan", "Sami"]
const userspass = ["Hussain123", "Hassan123", "Sami123"]
const checker = (username, userpassowrd) => {
    for (let i = 0; i < usersname.length; i++) {
        if (usersname[i] == username && userspass[i] == userpassowrd) {
            window.open("http://127.0.0.1:5502/MCQS.html", self)
            break;
        }
        else{
            alert("You are not registered")
        }
    }


}
button.addEventListener("click", function () {
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value
    checker(name, password)
})

// if(username == "Hussain" && userpassowrd == "Hussain123"){
//     window.open("http://127.0.0.1:5500/MCQS.html", self)
// }
// else if(username == "Hassan" && userpassowrd == "Hassan123"){
//     window.open("http://127.0.0.1:5500/MCQS.html", self)
// }
// else if(username == "Arbab" && userpassowrd == "Arbab123"){
//     window.open("http://127.0.0.1:5500/MCQS.html", self)
// }
// else if(username.value == "" || password.value == ""){
//     alert(`Please enter fill the both inputs`)
// }
// else{
//     alert("Wrong name or password")
// }