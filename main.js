// Change the span with the class mess-with-me to have a font size of 40px.

const messWithMe = document.querySelector('.mess-with-me');
messWithMe.style.fontSize = '48px';





// Change the paragraph with the class mess-with-me to have a background color of green.

const messWithMeParagraph = document.querySelector('p.mess-with-me');
messWithMeParagraph.style.backgroundColor = 'green';





// Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!
const hideTheDino = document.querySelector('#hide-me');
hideTheDino.style.display = 'none';





// Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
const firstDinoPic = document.querySelector('#triceratops');
firstDinoPic.height =  324;





// Add an event listener to the span with the class mess-with-me so that when it is clicked, the font color changes to orange.
.addEventListener