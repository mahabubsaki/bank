const getValueNumber = (id) =>{
    const element = document.getElementById(id).value
    const elementNumber = parseFloat(element)
    return elementNumber
}
const getInnerTextNumber = (id) =>{
    const element = document.getElementById(id).innerText
    const elementNumber = parseFloat(element)
    return elementNumber
}
const updateDepositeAndWithdraw = (id,input,operator) =>{
const previous = getInnerTextNumber(id)
let given = getValueNumber(input)
let updated = previous + given
if((given >= 0 && updated != NaN) && (operator == true)){
        document.getElementById('deposite').innerText = updated
        document.getElementById('deposite-input').value =''
}
else if((given >= 0 && updated != NaN) && (operator == false)){
    const balanceNumber = getInnerTextNumber('balance')
    if (given <= balanceNumber){
    document.getElementById('withdraw').innerText = updated
    document.getElementById('withdraw-input').value =''
    }
    else {
        alert('Invalid Withdraw Amount')
    }
}
else {
    alert('Invalid input')
}
}
const updateBalance = (first,second) =>{
let deposite = getInnerTextNumber(first)
let withdraw = getInnerTextNumber(second)
let actual = 1240
const newBalance = deposite - withdraw + actual
if(newBalance >= 0){
    document.getElementById('balance').innerText = newBalance
}
}
document.getElementById('deposite-btn').addEventListener('click', function(){
    updateDepositeAndWithdraw('deposite','deposite-input', true)
    updateBalance('deposite', 'withdraw')
})
document.getElementById('withdraw-btn').addEventListener('click', function(){
    updateDepositeAndWithdraw('withdraw','withdraw-input', false)
    updateBalance('deposite', 'withdraw')
})