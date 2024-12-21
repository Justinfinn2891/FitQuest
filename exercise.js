

let pullup, pushupWeight, pushup, curl, XP;
let totalXP = 0;
let level = 0; 
let nextXP = 500;

document.getElementById("face").onclick = function()
{
    window.location.href = "index.html";
}
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