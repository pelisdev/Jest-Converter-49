// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

function fromDollarToYen(amount) {
    return amount * 156.5; 
}
  
  function fromYanToPound(amount) {
    return amount * 0.87;
  }
  
  module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYanToPound
  };