console.log("WELCOME TO THE CONSOLE");
// Task 1: Button Click Event
document.getElementById('task1Button').addEventListener('click', function() {
  let inputtext = 'button clicked';
  console.log('Button Clicked!');
  document.getElementById('task1Button_output').innerHTML = inputtext;
});

// Task 2: Button Click - Sum of Two Variables
let num1 = 10;
let num2 = 20;
document.getElementById('task2Button').addEventListener('click', function() {
  let sum = num1 + num2;
  console.log('Number_1: ', num1, ' & Number_2: ', num2, '| Sum:', sum);
});

// Task 3: Input Box Value Retrieval (Console Log)
document.getElementById('task3Button').addEventListener('click', function() {
  let inputValue = document.getElementById('task3Input').value;
  console.log(inputValue);
});

// Task 4: Input Box Value Display (Paragraph Tag)
document.getElementById('task4Button').addEventListener('click', function() {
  let inputValue = document.getElementById('task4Input').value;
  document.getElementById('task4Output').innerHTML = inputValue;
});

// Task 5: Input Box - OnChange Event
document.getElementById('task5Input').addEventListener('change', function() {
  let inputValue = this.value;
  document.getElementById('task5Output').innerHTML = 'Input Changed: ' + inputValue;
});

// Task 6: Double Click Event
document.getElementById('task6Button').addEventListener('dblclick', function() {
  document.getElementById('task6Output').innerHTML = 'Button was double-clicked!';
});

// Task 7: Mouse Enter and Leave Event
document.getElementById('task7Div').addEventListener('mouseenter', function() {
  document.getElementById('task7Output').innerHTML = 'Mouse entered!';
});
document.getElementById('task7Div').addEventListener('mouseleave', function() {
  document.getElementById('task7Output').innerHTML = 'Mouse left!';
});

// Task 8: Key Press and Key Release Event
const task8Area = document.getElementById('task8Area');
const task8Output = document.getElementById('task8Output');

task8Area.addEventListener('click', function(){
  task8Area.innerHTML = 'Clicked! Press any key...';
  task8Area.style.backgroundColor = 'lightblue';
})

task8Area.addEventListener('keydown', function(event) {
  task8Output.innerHTML = 'Key pressed: ' + event.key;
  console.log('Key pressed!');
});

task8Area.addEventListener('keyup', function(event) {
  task8Output.innerHTML += '<br>'+ event.key +' Key released!';
  console.log('Key released!');
});

// Make the div focusable by clicking
task8Area.addEventListener('click', function() {
  this.focus();
});