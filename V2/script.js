document.addEventListener('DOMContentLoaded', function() {
    const leftButtons = document.querySelectorAll('.left-button');
    const rightButtons = document.querySelectorAll('.right-button');
    const amountSelect = document.getElementById('amount');
    const lotsValue1 = document.getElementById('lots-value-1');
    const lotsValue2 = document.getElementById('lots-value-2');
    const incrementLots1 = document.getElementById('increment-lots-1');
    const decrementLots1 = document.getElementById('decrement-lots-1');
    const incrementLots2 = document.getElementById('increment-lots-2');
    const decrementLots2 = document.getElementById('decrement-lots-2');
    const optionsTable = document.getElementById('options-table').querySelector('tbody');

    const conversionAmountInput = document.getElementById('conversion-amount');
    const convertedValueSpan = document.getElementById('converted-value');
    const buyButton = document.getElementById('buy-button');
    const sellButton = document.getElementById('sell-button');
    const submitButton = document.getElementById('submit-button');
    const convertButton = document.getElementById('convert-button');

    function addOptionToTable(lots, optionType, amount) {
        const totalAmount = lots * amount;
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><span class="lots-value">${lots}</span></td>
            <td>${optionType}</td>
            <td>${totalAmount}</td>
            <td><input type="text" class="sl-input" /></td>
            <td><input type="text" class="tsl-input" /></td>
            <td><button class="delete">Delete</button></td>
        `;

        optionsTable.appendChild(row);
        
        row.querySelector('.delete').addEventListener('click', handleDelete);
    }

    function handleButtonClick(event) {
        const button = event.target;
        const optionType = button.getAttribute('data-type');
        const amount = parseInt(amountSelect.value);
        const lots1 = parseInt(lotsValue1.textContent);
        const lots2 = parseInt(lotsValue2.textContent);

        if (lots1 > 0 && optionType && amount) {
            addOptionToTable(lots1, optionType, amount);
        } else if (lots2 > 0 && optionType && amount) {
            addOptionToTable(lots2, optionType, amount);
        } else {
            alert('Please fill in all fields.');
        }
    }

    function handleDelete(event) {
        const row = event.target.closest('tr');
        row.remove();
    }

    function handleIncrement(event, lotsValue) {
        lotsValue.textContent = parseInt(lotsValue.textContent) + 1;
    }

    function handleDecrement(event, lotsValue) {
        if (parseInt(lotsValue.textContent) > 0) {
            lotsValue.textContent = parseInt(lotsValue.textContent) - 1;
        }
    }

    function handleConversion() {
        const enteredAmount = conversionAmountInput.value;
        if (enteredAmount) {
            convertedValueSpan.textContent = `${enteredAmount} CE`;
        } else {
            convertedValueSpan.textContent = "--";
        }
    }

    incrementLots1.addEventListener('click', (event) => handleIncrement(event, lotsValue1));
    decrementLots1.addEventListener('click', (event) => handleDecrement(event, lotsValue1));
    incrementLots2.addEventListener('click', (event) => handleIncrement(event, lotsValue2));
    decrementLots2.addEventListener('click', (event) => handleDecrement(event, lotsValue2));

    leftButtons.forEach(button => button.addEventListener('click', handleButtonClick));
    rightButtons.forEach(button => button.addEventListener('click', handleButtonClick));

    convertButton.addEventListener('click', handleConversion);

    buyButton.addEventListener('click', function() {
        alert('Buy action');
        // Implement your buy functionality here
    });

    sellButton.addEventListener('click', function() {
        alert('Sell action');
        // Implement your sell functionality here
    });

    submitButton.addEventListener('click', function() {
        alert('Submit action ');
        // Implement your submit functionality here
    });
});
