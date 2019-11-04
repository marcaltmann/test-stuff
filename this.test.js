test('this refers to empty object in Jest execution context', () => {
  let actual = this;
  let expected = {};
  expect(actual).toEqual(expected);
});
