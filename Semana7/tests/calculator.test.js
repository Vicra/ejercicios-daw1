const calculator = require('./calculator')

test('sum two integers(2,3) -> 5', () => {
    expect(calculator.sum(2, 3)).toBe(5)
});

test('When_Sum_Two_Integer_Value_Should_Be_Integer', () => {
    expect(calculator.sum(4,3)).toBe(7)
});

test('sum two float(-1,0) -> -1', () => {
    expect(calculator.sum(-1, 0)).toBe(-1)
});

test('sum two negative value(4567, 4565) -> 9132', () => {
    expect(calculator.sum(4567, 4565)).toBe(9132)
});

test('multiply two integer(2,3) -> 6', () => {
    expect(calculator.multiply(2,3)).toBe(6)
});