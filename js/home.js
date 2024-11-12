
document.getElementById('btn-add-money').addEventListener('click', function(event){
   event.preventDefault();
    const addMoney = getInputFiledById('input-add-money');
    const pinNumber = getInputFiledById('input-pin-number')
    console.log('add money with parameter', addMoney , pinNumber);
})