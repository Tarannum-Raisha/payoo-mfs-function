

/**
 * 
 * common share function here 
 * 
 * 
 */
// console.log('utilities loaded');

// function getInputFiledById (){
//     console.log('will get value by id');
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }

function getInputFiledById (id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}