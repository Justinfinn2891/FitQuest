let username, weight, height;
/*document.getElementById("mySubmit").onclick = function()
{
    username = document.getElementById("myText").value;
    document.getElementById("myh1").textContent = `Hello ${username}`;
}
    */

let a =0;

document.getElementById("mySubmit").onclick = function()
{
    username = document.getElementById("myText").value; 
    a+=1;
}

document.getElementById("submit2").onclick = function()
{
    weight = document.getElementById("myText2").value; 
    a+=1;
}


document.getElementById("submit3").onclick = function()
{
    height = document.getElementById("myText3").value; 

    if(a >= 2)
    {
        window.location.href = "profile.html";
        document.getElementById("name").textContent = `Your Name is ${username}`;
        document.getElementById("weight").textContent = `Your Weight is ${weight}`;
        document.getElementById("height").textContent = `Your Height is ${height}`;
      
        
    }
}