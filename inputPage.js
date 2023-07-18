const form = document.getElementById("form");
const oldDollars = document.getElementById("old-dollars")
const oldTime = document.getElementById("old-time")
const oldDriven = document.getElementById("old-driven")
const newDollars = document.getElementById("new-dollars")
const newTime = document.getElementById("new-time")
const newDriven = document.getElementById("new-driven")
const carMPG = document.getElementById("car-mpg-info")

form.addEventListener("submit", function(e) {
    e.preventDefault();

    oldDollarsValue = oldDollars.value;
    oldTimeValue = oldTime.value;
    oldDrivenValue = oldDriven.value;
    newDollarsValue = newDollars.value;
    newTimeValue = newTime.value;
    newDrivenValue = newDriven.value;
    carMPGValue = carMPG.value;

    localStorage.setItem("oldDollars", oldDollarsValue)
    localStorage.setItem("oldTime", oldTimeValue)
    localStorage.setItem("oldDriven", oldDrivenValue)
    localStorage.setItem("newDollars", newDollarsValue)
    localStorage.setItem("newTime", newTimeValue)
    localStorage.setItem("newDriven", newDrivenValue)
    localStorage.setItem("carMPG", carMPGValue)
})


document.getElementById("the-one-button").addEventListener("click", get_answer);

function get_answer(){
    location.href="file:///C:/Users/1jaco/Documents/CS-361%20Milestone%201/answerPage.html";
}

