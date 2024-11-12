

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = addInputFieldById('input-cash-out');
    const pinNumber = addInputFieldById('cash-out-pin');
    if(isNaN(cashOut)){
        alert('failed to cash out');
        return;
    }
    const balance = getTextFieldById('account-balance')
    if(cashOut > balance ){
        alert('you do not have enough money');
        return;
       
    }
    if( pinNumber === 1234) {

       
       const balanceNumber = balance - cashOut;
       document.getElementById('account-balance').innerText= balanceNumber;
       //add to transaction history
       const div = document.createElement('div');
       div.classList.add('bg-blue-300');
       div.innerHTML = `
        <h4 class =' text-2xl font-bold '> Cash Out <h4>
        <p>    ${cashOut} Tk withdraw . New Balance ${balanceNumber} Tk</p>
       `
       document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('failed to cash out')
    }
})