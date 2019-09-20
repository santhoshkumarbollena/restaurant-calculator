
document.getElementById("calculate").addEventListener('click',claculate)
function claculate(){
    let costInString=document.getElementById("cost");
    let tipInString=document.getElementById("rate");

    let cost=parseFloat(costInString)
    let tip=parseFloat(tipInString)
    console.log(cost+tip+5.50)
    document.getElementById("grandtotal").innerHTML=(cost+tip+5.50)

}


