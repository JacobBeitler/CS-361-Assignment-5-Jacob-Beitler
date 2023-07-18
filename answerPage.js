const oldDollars = localStorage.getItem("oldDollars");
const oldTime = localStorage.getItem("oldTime");
const oldDriven = localStorage.getItem("oldDriven");
const newDollars = localStorage.getItem("newDollars");
const newTime = localStorage.getItem("newTime");
const newDriven = localStorage.getItem("newDriven");
const carMPG = localStorage.getItem("carMPG");

const oldDPHPlusDriving = (oldDollars * 40) / (40 + (10 * Number(oldDriven / 60)));
const newDPHPlusDriving = (newDollars * 40) / (40 + (10 * Number(newDriven / 60)));

console.log(oldDollars * 40)

document.getElementById("old-dollars-per-hour").textContent = oldDPHPlusDriving.toFixed(2);
document.getElementById("new-dollars-per-hour").textContent = newDPHPlusDriving.toFixed(2);

if (oldDriven > newDriven) {
    const extraTime = oldDriven - newDriven;
    const extraMoney = extraTime * 1.5 * newDollars;
    const totalDPHWithOvertime = (extraMoney + (newDollars * 40)) / (40 + (10 * Number(newDriven / 60) + (newDriven * 10)));

    document.getElementById("new-miles-to-work").textContent = totalDPHWithOvertime.toFixed(2);
    document.getElementById("old-miles-to-work").textContent = oldDPHPlusDriving.toFixed(2);
}

else {
    const extraTime = (newDriven - oldDriven) * 10;
    const extraMoney = extraTime / 60 * 1.5 * oldDollars;
    const totalDPHWithOvertime = (extraMoney + (oldDollars * 40)) / (40 + (10 * Number(oldDriven / 60)) + extraTime / 60);

    console.log(extraTime)
    console.log(extraMoney + (oldDollars * 40))

    document.getElementById("new-miles-to-work").textContent = newDPHPlusDriving.toFixed(2);
    document.getElementById("old-miles-to-work").textContent = totalDPHWithOvertime.toFixed(2);
}

if (carMPG != "") {
    const oldTimeCarExpense = ((oldTime * 0.18) + (oldTime / carMPG) * 8) * 5
    const newTimeCarExpense = ((newTime * 0.18) + (newTime / carMPG) * 8) * 5

    const oldCarCost = ((oldDPHPlusDriving * 40) - oldTimeCarExpense) / 40
    const newCarCost = ((newDPHPlusDriving * 40) - newTimeCarExpense) / 40

    document.getElementById("old-time-driven").textContent = oldCarCost.toFixed(2)
    document.getElementById("new-time-driven").textContent = newCarCost.toFixed(2)
}

if (carMPG == "") {
    if (document.getElementById("new-dollars-per-hour").textContent > document.getElementById("old-dollars-per-hour").textContent) {
        document.getElementById("simple-answer").textContent = "The new job is financially better"
    }

    else {
        document.getElementById("simple-answer").textContent = "The old job is finacially better"
    }
}

else {
    if (document.getElementById("new-time-driven").textContent > document.getElementById("old-time-driven").textContent) {
        document.getElementById("simple-answer").textContent = "The new job is financially better"
    }

    else {
        document.getElementById("simple-answer").textContent = "The old job is finacially better"
    }
}

if ((document.getElementById("new-miles-to-work").textContent) > document.getElementById("old-miles-to-work").textContent) {
    document.getElementById("more-complex-answer").textContent = "The new job is finacially better if you work overtime"
}

else {
    document.getElementById("more-complex-answer").textContent = "The old job is finacially better if you work overtime"
}


document.getElementById("the-other-button").addEventListener("click", go_back);

function go_back(){
    localStorage.clear();

    location.href="file:///C:/Users/1jaco/Documents/CS-361%20Milestone%201/inputPage.html";
}

