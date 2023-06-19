const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table = document.querySelector('#grocery-table');

  // Get all the price elements
  const priceElements = table.querySelectorAll('.prices');

  let totalPrice = 0;

  // Loop through each price element and sum the prices
  priceElements.forEach((priceElement) => {
    const price = parseFloat(priceElement.textContent.replace('$', ''));
    totalPrice += price;
  });

  // Check if the total price row already exists
  const totalRow = table.querySelector('#total-row');
  if (totalRow) {
    // Update the total price cell
    const totalCell = totalRow.querySelector('.total-price');
    totalCell.textContent = 'Total Price: $' + totalPrice.toFixed(2);
  } else {
    // Create a new row element
    const newRow = document.createElement('tr');
    newRow.id = 'total-row';

    // Create a cell for the total price
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2');
    totalCell.classList.add('total-price');
    totalCell.textContent = 'Total Price: $' + totalPrice.toFixed(2);

    // Append the cell to the row
    newRow.appendChild(totalCell);

    // Append the row to the table
    table.appendChild(newRow);
  }
	
};

getSumBtn.addEventListener("click", getSum);

