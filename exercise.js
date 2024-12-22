

let pullup, pushupWeight, pushup, curl, XP;
let totalXP = 0;
let level = 0; 
let nextXP = 500;
let goalPushup = 0;
let goalPullup = 0;
let element = document.getElementById("progress");
let element2 = document.getElementById("progress2");  
let totalGoalPushup = 10;
let totalGoalPullup = 25; 
let goal1 = 0;
let goal2 = 0;
let isfinishedGoal1 = false;
let isfinishedGoal2 = false;
let displayPushup = 0;
let displayPullup = 0; 
document.getElementById("face").onclick = function()
{
    window.location.href = "index.html";
}
document.getElementById("submit").onclick = function()
{
    pushup = parseInt(document.getElementById("pushup").value, 10) * 2 || 0;
    pullup = parseInt(document.getElementById("pullup").value, 10) * 2 || 0;
    curl = parseInt(document.getElementById("curl").value, 10) * 2 || 0;

    

    goal1 = parseInt(document.getElementById("pushup").value, 10) || 0;
    goal2 = parseInt(document.getElementById("pullup").value, 10) || 0;
    goalPullup += goal2; 
    goalPushup += goal1;

    if(!isfinishedGoal1){
        displayPushup = goalPushup*10+ "%";
        element.style.width = displayPushup;

    }

    if(!isfinishedGoal2)
    {
        displayPullup = goalPullup *10 + "%";
        element2.style.width = displayPullup;
    }
    XP = (pullup + pushup + curl);
    totalXP += XP; 

    if(totalGoalPushup <= goalPushup && !isfinishedGoal1)
    {
        console.log("Goal Completed!");
        window.alert("Goal Completed! 500XP Rewarded!");
        totalXP += 500;
        element.style.backgroundColor = "rgb(0, 102, 128)";
        isfinishedGoal1 = true;
    }

    if(totalGoalPullup <= goalPullup && !isfinishedGoal2)
        {
            console.log("Goal Completed!");
            window.alert("Goal Completed! 1000XP Rewarded!");
            totalXP += 1000;
            element2.style.backgroundColor = "rgb(0, 102, 128)";
            isfinishedGoal2 = true;
        }

    if(totalXP > nextXP)
    {
        console.log("Done");
        level+=1;
        console.log(level);
        nextXP = nextXP + 750;
        totalXP = 0;
    }

    console.log(nextXP);
    console.log(level);
    document.getElementById("lev").textContent = `${level}`;
    document.getElementById("xp").textContent = `Current XP: ${totalXP}`;
    document.getElementById("txp").textContent = `XP Needed for next level: ${nextXP}`;
}