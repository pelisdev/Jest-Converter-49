test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test('Convierte dólares a yenes correctamente', () => {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(3.5);
  
    const expected = 3.5 * 156.5;
  
    expect(yenes).toBe(expected);
  });
  test('Convierte yenes a libras esterlinas correctamente', () => {
    const { fromYanToPound } = require('./app.js');

    const pounds = fromYanToPound(1);
  
    const expected = 1 * 0.87;
  
    expect(pounds).toBe(expected);
  });