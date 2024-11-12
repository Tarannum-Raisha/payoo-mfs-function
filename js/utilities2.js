
    function addInputFieldById (id){
       const inputValue = document.getElementById(id).value ;
       const inputResult = parseFloat(inputValue);
       return inputResult;
    }
   
    function getTextFieldById (id){
        const textValue = document.getElementById(id).innerText;
        const textResult = parseFloat(textValue);
        return textResult;
    }


    function showSectionById (id){
        document.getElementById('add-money-form').classList.add('hidden');
        document.getElementById('cash-out-form').classList.add('hidden');
        document.getElementById('transaction-section').classList.add('hidden');
        // show the section with the provided id
        document.getElementById(id).classList.remove('hidden');
    }