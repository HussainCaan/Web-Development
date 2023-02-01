const submit = document.getElementById("submit")



submit.addEventListener("click", function () {

    let marks1 = 0
    let h1 = document.getElementById("h1")
    let question1 = document.getElementsByName("Qustion0")
    let question2 = document.getElementsByName("Question1")
    let question3 = document.getElementsByName("Question2")
    let question4 = document.getElementsByName("Question3")

    for (let i = 0; i <= question1.length; i++) {
        if (question1[i].checked) {
            let ans = question1[i].value
            if (ans == "D") {
                marks1++
                break;
            }
            else{
                marks1 = marks1;
                break;
            }
        }
    }
    console.log(marks1)

    for (let i = 0; i <= question2.length; i++) {
        if (question2[i].checked) {
            let answer = question2[i].value;
            if (answer == "B") {
                marks1++
                break;
            }
            else{
                marks1 = marks1;
                break;
            }
        }
    }
    console.log(marks1)
    for (let i = 0; i <= question3.length; i++) {
        if (question3[i].checked) {
            let answer = question3[i].value;
            if (answer == "C") {
                marks1++
                break;
            }
            else{
                marks1 = marks1;
                break;
            }
        }
    }
    console.log(marks1)
    for (let i = 0; i <= question4.length; i++) {
        if (question4[i].checked) {
            let answer = question4[i].value;
            if (answer == "A") {
                marks1++
                break;
            }
            else{
                marks1 = marks1;
                break;
            }

        }
    }
    console.log(marks1)
    let finalmessage = `You got ${marks1} out of 4 marks`;
    h1.innerHTML = finalmessage;

})