function fromDollarToYen(amount) {
    return amount * 156.5; // 1 dólar = 110.29 yenes (tasa de cambio aproximada)
  }
  
  function fromEuroToDollar(amount) {
    return amount * 1.07; // 1 euro = 1.18 dólares (tasa de cambio aproximada)
  }
  
  function fromYanToPound(amount) {
    return amount * 0.87; // 1 yen = 0.0069 libras esterlinas (tasa de cambio aproximada)
  }
  
  module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYanToPound
  };