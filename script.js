
function compute()
{   var principal = document.getElementById("principal").value;
    if(principal<=0){
        alert("Enter a positive number")
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        txt= "If you deposit "+ principal + "\n at an interest rate of "+rate + "% \n"+
        "You will receive an amount of " + interest +", \n in year " +  year;
        document.getElementById("result").innerText=txt ;
    }
    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        