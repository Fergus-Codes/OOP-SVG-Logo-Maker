// Import Shape classes from shapes.js to test with Jest
const { TriangleShape, CircleShape, SquareShape } = require("./shapes");

// Using Jest to test TriangleShape
describe("TriangleShape testing", () => {
  test("Test whether the TriangleShape has a fill value of #e1e3ed", () => {
    const shape = new TriangleShape();
    // Set the color of the triangle to #e1e3ed
    shape.setColor("#e1e3ed");
    // We expect the shape to equal '<polygon points="150, 18 244, 182 56, 182" fill="#e1e3ed" />' which should return true
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="#e1e3ed" />'
    );
  });
});

// Using Jest to test CircleShape
describe("CircleShape testing", () => {
  test("Test whether the CircleShape has a fill value of #0025ca", () => {
    const shape = new CircleShape();
    // Set the color of the circle to #0025ca
    shape.setColor("#0025ca");
    // We expect the shape to equal <circle cx="150" cy="115" r="80" fill="#0025ca"> which should return true
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#0025ca" />'
    );
  });
});

// Using Jest to test SquareShape
describe("SquareShape testing", () => {
    test("Test whether the SquareShape has a fill value of Blue", () => {
      const shape = new SquareShape();
       // Set the color of the circle to Blue
      shape.setColor("Blue");
      // We expect the shape to equal '<rect x="73" y="40" width="160" height="160" fill="Blue" />' which should return true
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="Blue" />'
      );
    });
  });