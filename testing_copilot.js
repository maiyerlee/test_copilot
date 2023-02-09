function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  return Math.round((endDate - beginDate) / 1000 / 60 / 60 / 24);    
}

// find all images without alternative text
// and give them a red border
function processImages() {
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    if (!image.alt) {
      image.style.border = '2px solid red';
    }
  });
}

// convert all letter to uppercase
function processText() {
  const text = document.querySelector('body');
  text.innerText = text.innerText.toUpperCase();
}

// find all links and add a target="_blank"
function processLinks() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.target = '_blank';
  });
}

// copilot on framework
// Express server on port 3000
const express = require('express');
const app = express();
const port = 3000; 

app.get('/', (req, res) => {
  res.send('Hello World!');
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}       

// Return the current time 
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

