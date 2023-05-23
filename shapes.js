//Creating a shape class 
class Shape {
    constructor() {
      this.color = "";
    }

    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
// defining the TriangleShape class
  class TriangleShape extends Shape {
    render() {

      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }

// defining the CircleShape class
  class CircleShape extends Shape {
    render() {

      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
// defining the SquareShape class
  class SquareShape extends Shape {
    render() {

      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
// Exporting the shapes to be imported in the shapes.test and index files
  module.exports = { TriangleShape, CircleShape, SquareShape };