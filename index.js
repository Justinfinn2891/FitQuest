let username;

document.getElementById("mySubmit").onclick = function()
{
    username = document.getElementById("myText").value;
    document.getElementById("myh1").textContent = `Hello ${username}`;
}