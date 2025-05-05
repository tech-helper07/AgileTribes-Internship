// Task 1: Fetch & Display Selected Values

console.log("JavaScript loaded successfully!");
document.getElementById('fetchButton').addEventListener('click', function() {
  // Get selected radio button value
  const selectedRadio = document.querySelector('input[name="fruit"]:checked');
  console.log("Selected radio button:", selectedRadio.value);
  let radioValue = selectedRadio ? selectedRadio.value : "None selected";
  
  // Get selected checkboxes
  const selectedCheckboxes = document.querySelectorAll('input[name="hobby"]:checked');
  let checkboxValues = [];
  //console.log("Selected checkboxes:", selectedCheckboxes);
  selectedCheckboxes.forEach(function(checkbox) {
      checkboxValues.push(checkbox.value);
  });
  
  // Display results
  const resultText = `
      Selected Fruit: ${radioValue}<br>
      Selected Hobbies: ${checkboxValues.length > 0 ? checkboxValues.join(', ') : "None selected"}
  `;
  
  document.getElementById('selectionResult').innerHTML = resultText;
});



// Task 2: Exploring DOM Selection Methods


document.getElementById('demonstrateButton').addEventListener('click', function() {
  // Using getElementById()
  const elementById = document.getElementById('targetById');
  elementById.innerHTML +=`<br> Content modified using getElementById()`;
  elementById.style.fontWeight = "bold";
  document.getElementById('results').innerHTML += elementById;
  console.log("Element selected by ID:", elementById);
  
  // Using querySelector()
  const firstQueryItem = document.querySelector('.queryItem');
  firstQueryItem.style.color = "red";
  firstQueryItem.style.fontStyle = "italic";
  firstQueryItem.innerHTML += " (Modified by querySelector())";
  document.getElementById('results').innerHTML += `<br>${firstQueryItem.innerHTML}`;
  console.log("Element selected by querySelector:", firstQueryItem);
  
  // Using querySelectorAll()
  const allQueryItems = document.querySelectorAll('.queryItem');
  allQueryItems.forEach(function(item, index) {
      item.classList.add('highlight');
      item.innerHTML += ` (Modified by querySelectorAll() - Item #${index + 1})`;
  });
  document.getElementById('results').innerHTML += `<br>${Array.from(allQueryItems).map(item => item.innerHTML).join('<br>')}`;
  console.log("Elements selected by querySelectorAll:", allQueryItems);
});