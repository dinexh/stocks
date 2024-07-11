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

    function addOptionToTable(lots, optionType, amount) {
        const totalAmount = lots * amount;
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><span class="lots-value">${lots}</span></td>
            <td>${optionType}</td>
            <td>${totalAmount}</td>
            <td>
                <div class="sl-box">
                    <button class="sl-decrement">-</button>
                    <span class="sl-value">0</span>
                    <button class="sl-increment">+</button>
                </div>
            </td>
            <td>
                <div class="tsl-box">
                    <button class="tsl-decrement">-</button>
                    <span class="tsl-value">0</span>
                    <button class="tsl-increment">+</button>
                </div>
            </td>
            <td><button class="delete">Delete</button></td>
        `;

        optionsTable.appendChild(row);
        
        row.querySelector('.delete').addEventListener('click', handleDelete);
        row.querySelector('.sl-increment').addEventListener('click', (event) => handleIncrement(event, row.querySelector('.sl-value')));
        row.querySelector('.sl-decrement').addEventListener('click', (event) => handleDecrement(event, row.querySelector('.sl-value')));
        row.querySelector('.tsl-increment').addEventListener('click', (event) => handleIncrement(event, row.querySelector('.tsl-value')));
        row.querySelector('.tsl-decrement').addEventListener('click', (event) => handleDecrement(event, row.querySelector('.tsl-value')));
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

    function handleIncrement(event, valueElement) {
        valueElement.textContent = parseInt(valueElement.textContent) + 1;
    }

    function handleDecrement(event, valueElement) {
        if (parseInt(valueElement.textContent) > 0) {
            valueElement.textContent = parseInt(valueElement.textContent) - 1;
        }
    }

    incrementLots1.addEventListener('click', (event) => handleIncrement(event, lotsValue1));
    decrementLots1.addEventListener('click', (event) => handleDecrement(event, lotsValue1));
    incrementLots2.addEventListener('click', (event) => handleIncrement(event, lotsValue2));
    decrementLots2.addEventListener('click', (event) => handleDecrement(event, lotsValue2));

    leftButtons.forEach(button => button.addEventListener('click', handleButtonClick));
    rightButtons.forEach(button => button.addEventListener('click', handleButtonClick));
});
