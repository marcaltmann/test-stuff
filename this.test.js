test('this refers to empty object in Jest execution context', () => {
  let actual = this;
  let expected = {};
  expect(actual).toEqual(expected);
});

test('this in a function refers to the object the function is called on', () => {
  expect.assertions(1);
  let obj = {};
  function myFunc() {
    let actual = this;
    let expected = obj;
    expect(actual).toEqual(expected);
  }

  obj.myFunc = myFunc;
  obj.myFunc();
});

test('this does not refer to object if function is not called on object', () => {
  expect.assertions(1);
  let obj = {};
  function myFunc() {
    let actual = this;
    let expected = global;
    expect(actual).toEqual(expected);
  }

  obj.myFunc = myFunc;
  myFunc();
});
