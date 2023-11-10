const calculatePrice = require('./calculatePrice');
test('Not old enough test', () => {
  expect(calculatePrice.calculateProductPrice(20, 'A', false, false)).toBe('Customer does not meet the purchase requirements.');
});
test('Minimum age test', () => {
  expect(calculatePrice.calculateProductPrice(21, 'A', false, false)).toBe(20);
});
test('Old enough', () => {
  expect(calculatePrice.calculateProductPrice(55, 'A', false, false)).toBe(20);
});
test('option D price increase', () => {
  expect(calculatePrice.calculateProductPrice(55, 'D', false, false)).toBe(24);
});
test('If loyalty discount works', () => {
  expect(calculatePrice.calculateProductPrice(55, 'A', false, true)).toBe(18);
});
test('If loyalty and product D work together', () => {
  expect(calculatePrice.calculateProductPrice(26, 'D', false, true)).toBe(21.6);
});
test('If returns works', () => {
  expect(calculatePrice.calculateProductPrice(23, 'A', true, false)).toBe(170);
});
test('If everything works at the same time', () => {
  expect(calculatePrice.calculateProductPrice(26, 'D', true, true)).toBe(156.6);
});