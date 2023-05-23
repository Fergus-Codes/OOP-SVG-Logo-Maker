// Import inquirer and fs
const inquirer = require("inquirer");
const fs = require("fs");

// Import the shapes from shapes.js file
const { TriangleShape, SquareShape, CircleShape } = require("./shapes");

// Function to write the data collect to the file (The generated SVG Logo)
function writeToFile(fileName, answers) {

 let svgString = '';
 svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
// Store all of the users choices in an easily accessible variable
  let selectedShape;


  if (answers.shape === "A Triangle") {
    selectedShape = new TriangleShape();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;

  } else if (answers.shape === "A Circle") {
    selectedShape = new CircleShape();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    
  } else {
    selectedShape = new SquareShape();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  };

// Creates the logo using the svgString variable, which stores a concatonated series of values for the users choices.
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.logoColorText}">${answers.textContent}</text>`;

  svgString += "</g>";

  svgString += "</svg>";
  

// Write the file svgString.
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated your logo sucessfully");
  });
}

// Function to gather the info for the desired qualities of the Logo. (Text, Text color etc.)
function gatherInfo() {
  inquirer
    .prompt([

      {
        type: "input",
        message: "Please enter which color you would like your logo text to be.",
        name: "logoColorText",
       
      },

      {
        type: "input",
        message: "Please Enter 3 characters to be included in your logo.",
        name: "textContent",
      },

      {
        type: "input",
        message: "Please choose which color you like the background of your logo to be.",
        name: "shapeBackgroundColor",
      },

      {
        type: "list",
        message: "Please select which shape you would like your logo to be.",
        choices: ["A Triangle", "A Square", "A Circle"],
        name: "shape",
      },

    ])
    .then((answers) => {

      if (answers.textContent.length > 3) {
        // Throw error if user inputs more than 3 characters.
        console.log("Please ensure that you have entered no more than 3 characters");
        gatherInfo();
      } else {
        // Write a file called logo.svg passing in answers.
        writeToFile("logo.svg", answers);
      }
    });
}

// Init the logo generated by running the gatherInfo function.
gatherInfo();