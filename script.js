const columnData = [
    Array(50).fill('E'),
    Array(25).fill('S').concat(Array(25).fill('B')),
    Array(50).fill('B'),
    ['23500', '23550', '23600', '23650', '23700', '23750', '23800', '23850', '23900', '23950', '24000', '24050', '24100', '24150', '24200', '24250', '24300', '24350', '24400', '24450', '24500', '24550', '24600', '24650', '24700', '24750', '24800', '24850', '24900', '24950', '25000'],
    Array(25).fill('B').concat(Array(25).fill('S')),
    Array(50).fill('S'),
    Array(50).fill('E')
];

function onButtonClick(row, col, text) {
    let associatedValue = columnData[3][row] || '';
    let action = '';
    if (text === 'B') {
        action = 'Buy';
    } else if (text === 'S') {
        action = 'Sell';
    } else if (text === 'E') {
        action = 'Exit';
    }
    alert(`${action} ${associatedValue}`);
    updateTable(action, associatedValue);
}

function updateTable(action, value) {
    let tableContainer = document.getElementById('actionTableContainer');
    let table = tableContainer.querySelector('table');

    if (!table) {
        table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Buy</th>
                    <th>Sell</th>
                    <th>Exit</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        tableContainer.appendChild(table);
    }

    let tbody = table.querySelector('tbody');
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${action === 'Buy' ? value : ''}</td>
        <td>${action === 'Sell' ? value : ''}</td>
        <td>${action === 'Exit' ? value : ''}</td>
    `;
    tbody.appendChild(row);
}

const buttonGrid = document.getElementById('buttonGrid');
for (let row = 0; row < 50; row++) {
    for (let col = 0; col < 7; col++) {
        let text = columnData[col][row] || '';
        let button = document.createElement('div');
        button.className = `button ${text === 'B' || text === 'S' || text === 'E' ? text : 'default'}`;
        button.innerText = text;
        button.onclick = () => onButtonClick(row, col, text);
        buttonGrid.appendChild(button);
    }
}

document.querySelectorAll('.increment').forEach((button, index) => {
    button.addEventListener('click', () => {
        const counterId = `counter${index + 1}`;
        const counterElement = document.getElementById(counterId);
        counterElement.innerText = parseInt(counterElement.innerText) + 1;
    });
});

document.querySelectorAll('.decrement').forEach((button, index) => {
    button.addEventListener('click', () => {
        const counterId = `counter${index + 1}`;
        const counterElement = document.getElementById(counterId);
        const currentValue = parseInt(counterElement.innerText);
        if (currentValue > 0) {
            counterElement.innerText = currentValue - 1;
        }
    });
});
