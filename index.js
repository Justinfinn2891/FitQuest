

let pullup, pushupWeight, pushup, curl;

document.getElementById("submit").onclick = function()
{
    pullup = (document.getElementById("pullup").value) * 2;
    pullupWeight = (document.getElementById("pushupWeight").value) *2;
    pushup = (document.getElementById("pushup").value) * 2;
    curl = (document.getElementById("curl").value) * 2;

    totalXP = pullup + pushupWeight + pushup + curl; 

    document.getElementById("xp").textContent = `XP: ${totalXP}`;
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
