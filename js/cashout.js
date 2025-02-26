document.getElementById("btn-cashout")
.addEventListener("click",function(event){
    event.preventDefault()
    const agentNumber=document.getElementById("agent-number").value;
    const cashoutAmount=document.getElementById("cashout-amount").value;
    const transferCashoutAmount=parseFloat(cashoutAmount);
    const cashoutPin=document.getElementById("cashout-pin").value;
    const transferCashoutPin=parseIn(cashoutPin);
    const mainBalance=getElementById("main-balance").innerText;
    const transferMainBalance=parseFloat(mainBalance);
    if(agentNumber.length!==11){
        alert("please valid agent number")
    }
    

})