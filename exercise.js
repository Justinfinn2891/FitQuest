

let pullup, pushupWeight, pushup, curl, XP;
let totalXP = 0;
let level = 0; 
let nextXP = 500;
document.getElementById("submit").onclick = function()
{
    pushup = (document.getElementById("pushup").value) * 2;
    pullup = (document.getElementById("pullup").value) * 2;
    curl = (document.getElementById("curl").value) * 2;


    XP = (pullup + pushup + curl);
    totalXP += XP; 
    document.getElementById("xp").textContent = `Total XP: ${totalXP}`;
    console.log(totalXP)
    if(totalXP > nextXP)
    {
        console.log("Done");
        level+=1;
        console.log(level);
        nextXP = nextXP + 500;
    }
    console.log(nextXP);
    console.log(level);
    document.getElementById("level").textContent = `Level: ${level}`;
}

/*
document.addEventListener("DOMContentLoaded", function () {
    let username, weight, height;
    let a = 0;

    document.getElementById("mySubmit").onclick = function () {
        username = document.getElementById("myText").value;
        localStorage.setItem("username", username);
        a += 1;
    };

    document.getElementById("submit2").onclick = function () {
        weight = document.getElementById("myText2").value;
        localStorage.setItem("weight", weight);
        a += 1;
    };

    document.getElementById("submit3").onclick = function () {
        height = document.getElementById("myText3").value;
        localStorage.setItem("height", height);
        if (a >= 2) {
            window.location.href = "profile.html";
        }
    };
});
*/
