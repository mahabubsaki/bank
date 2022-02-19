function getValueNumber(id){
    let idInput = document.getElementById(id)
    let idText = idInput.value
    let idNumber = parseFloat(idText)
    return idNumber
}
function getTextNumber(id){
    let idInput = document.getElementById(id)
    let idText = idInput.innerText
    let idNumber = parseFloat(idText)
    return idNumber
}
function updateDeposite(newDeposite, oldDeposite, updateText, resetInput, checking){
    if((newDeposite > 0) && (newDeposite != NaN)){
        if(checking == true){
            let withdrawNumber = getValueNumber('withdraw-input')
            let balanceNumber = getTextNumber('balance')
            if(withdrawNumber <= balanceNumber){
                let update = newDeposite + oldDeposite
                updateText.innerText = update
                resetInput.value = ''
            }
        }
        else{
            let update = newDeposite + oldDeposite
            updateText.innerText = update
            resetInput.value = ''
        }
    }
}
function updateBalance(previousBalance, newDeposite, isIncreasing){
 if((isIncreasing == true) && (newDeposite > 0) && (newDeposite != NaN)){
     let newBalance = previousBalance + newDeposite
     document.getElementById('balance').innerText = newBalance
 }
 else if((isIncreasing == false) && (newDeposite > 0) && (newDeposite != NaN)){
     let newBalance = previousBalance - newDeposite
     if(newBalance >= 0){
        document.getElementById('balance').innerText = newBalance
     }
 }
}
let depositeBtn = document.getElementById('deposite-btn')
depositeBtn.addEventListener('click', function(){
    let depositeNumber = getValueNumber('deposite-input')
    let previousNumber = getTextNumber('deposite')
    let deposite = document.getElementById('deposite')
    let depositeInput = document.getElementById('deposite-input')
    let balanceNumber = getTextNumber('balance')
    updateDeposite(depositeNumber, previousNumber, deposite, depositeInput)
    updateBalance(balanceNumber, depositeNumber, true)
})
let withdrawBtn = document.getElementById('withdraw-btn')
withdrawBtn.addEventListener('click', function(){
    let withdrawNumber = getValueNumber('withdraw-input')
    let previousNumber = getTextNumber('withdraw')
    let withdraw = document.getElementById('withdraw')
    let withdrawInput = document.getElementById('withdraw-input')
    let balanceNumber = getTextNumber('balance')
    updateDeposite(withdrawNumber, previousNumber, withdraw, withdrawInput, true)
   updateBalance(balanceNumber, withdrawNumber, false)
})