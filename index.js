

document.getElementById("face").onclick = function()
{
    window.location.href = "index.html";
}

document.getElementById("exercise").onclick = function()
{
    window.location.href = "exercise.html"
}
document.getElementById("exercise2").onclick = function()
{
    window.location.href = "exercise.html"
}

document.getElementById("profile").onclick = function()
{
    window.alert("Under Construction!");
}
document.getElementById("profile2").onclick = function()
{
    window.alert("Under Construction!");
}
document.getElementById("contact").onclick = function()
{
    window.location.href = "contact.html";
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
