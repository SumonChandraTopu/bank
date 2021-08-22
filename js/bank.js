
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositValueText = depositInput.value;
    const newDepositValue = parseInt(newDepositValueText);
    
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositValueText = depositTotal.innerText;
    const previousDepositValue = parseInt(previousDepositValueText);
    const newDeposit = newDepositValue + previousDepositValue;
    depositTotal.innerText = newDeposit;

    const updateTotal = document.getElementById('update-total');
    const previousBalanceText = updateTotal.innerText;
    const previousBalance = parseInt(previousBalanceText);
    const newBalance = previousBalance + newDepositValue;
    updateTotal.innerText = newBalance;

    depositInput.value = '';
})


document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withDrawInput = document.getElementById('withdraw-input');
    const newWithdrawValueText = withDrawInput.value;
    const newWithdrawValue = parseInt(newWithdrawValueText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawValueText = withdrawTotal.innerText;
    const previousWithdrawValue = parseInt(previousWithdrawValueText);
    const previousWithdraw = previousWithdrawValue + newWithdrawValue;
    withdrawTotal.innerText = previousWithdraw;

    const updateTotal = document.getElementById('update-total');
    const previousBalanceText = updateTotal.innerText;
    const previousBalance = parseInt(previousBalanceText);
    const updateBalance = previousBalance - newWithdrawValue;
    updateTotal.innerText = updateBalance;
    
    withDrawInput.innerText = '';
})

// Login Page
















































































