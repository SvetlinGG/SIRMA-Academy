 // Get element by id
 const loremTextElements = document.getElementById('lorem-text');
 console.log(loremTextElements.textContent);

 // Update DOM after two seconds
 setTimeout(() => {
     loremTextElements.textContent = 'Updated lorem text!'
 }, 2000)

 // Get nested element
 const secondaryText = document.getElementById('secondary-text');
 //const strongTextElement = secondaryText.getElementById('strong-text');
 //console.log(strongTextElement.textContent);

 // Get elements by class name
 const typographyElements = document.getElementsByClassName('typography');
 console.log(typographyElements);
 
 // Get elements by tag name
 const paragraphElement = document.getElementsByTagName('p');
 console.log(paragraphElement);

 // Select elements in subtree
 const mainElement = document.getElementById('main-content');
 console.log(mainElement.getElementsByTagName('p'));
 
 // Query Selector

 const specificInput = document.querySelector('[name=username]');
 specificInput.value = 'Svetlin Garabedyan';

 // Query Selector All - get all elements that match the css selector
 const inputElements = document.querySelectorAll('[name=username]');
 console.log(inputElements);

 // Get parent element

 const mainHeaderElement = document.querySelector('.main-header');

