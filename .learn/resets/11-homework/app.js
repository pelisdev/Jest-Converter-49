// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

function fromDollarToYen(amount) {
    return amount * 156.5; // 1 dólar = 110.29 yenes (tasa de cambio aproximada)
  }
  
  
  function fromYanToPound(amount) {
    return amount * 0.87; // 1 yen = 0.0069 libras esterlinas (tasa de cambio aproximada)
  }
  
  module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYanToPound
  };