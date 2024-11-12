
    document.getElementById('btn-add-money').addEventListener('click', function(event){
        event.preventDefault();
        const addMoney = addInputFieldById('input-add-money');
        const addPin = addInputFieldById ('input-pin-number');
// you should not use it
      if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
      }
        if( addPin === 1234 ){
            const balance = getTextFieldById('account-balance');
            const newBalance = balance + addMoney;
          
            document.getElementById('account-balance').innerText = newBalance;
            // add to transaction history
            const p = document.createElement('p')
                                p.innerText = ` Added : ${addMoney} Tk. New Balance : ${newBalance}`;
                                //should be common function
                                document.getElementById('transaction-container').appendChild(p);
        }
        else{
      alert('failed money added')      
        }
    })