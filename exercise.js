

let pullup, pushupWeight, pushup, curl, XP;
let totalXP = 0;
let level = 0; 
let nextXP = 500;
let goalPushup = 0;
let element = document.getElementById("progress"); 
let totalGoalPushup = 10; 
let goal = 0;
let isfinished = false;
document.getElementById("face").onclick = function()
{
    window.location.href = "index.html";
}
document.getElementById("submit").onclick = function()
{
    pushup = parseInt(document.getElementById("pushup").value, 10) * 2 || 0;
    pullup = parseInt(document.getElementById("pullup").value, 10) * 2 || 0;
    curl = parseInt(document.getElementById("curl").value, 10) * 2 || 0;
    console.log(goalPushup);
    

    goal = parseInt(document.getElementById("pushup").value, 10) || 0;
    console.log(goal);
    goalPushup += goal;
    console.log(goalPushup);
    if(!isfinished){
        displayPushup = goalPushup*10+ "%";
        element.style.width = displayPushup;
    }
    XP = (pullup + pushup + curl);
    totalXP += XP; 

    if(totalGoalPushup <= goalPushup && !isfinished)
    {
        console.log("Goal Completed!");
        window.alert("Goal Completed! 500XP Rewarded!");
        totalXP += 500;
        element.style.backgroundColor = "rgb(0, 102, 128)";
        isfinished = true;
    }
    if(totalXP > nextXP)
    {
        console.log("Done");
        level+=1;
        console.log(level);
        nextXP = nextXP + 500;
    }

    console.log(nextXP);
    console.log(level);
    document.getElementById("lev").textContent = `${level}`;
    document.getElementById("xp").textContent = `Total XP: ${totalXP}`;
}