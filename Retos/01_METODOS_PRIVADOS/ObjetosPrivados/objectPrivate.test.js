const User = require('./user');

describe('User class', () => {

  test('Creates an instance correctly', () => {
    const user = new User({ name: "Juanito", email: "Juan@gmail.com", age: 18 });
    expect(user.getDataUser()).toEqual({ name: "Juanito", email: "Juan@gmail.com", age: 18 });
  });

  test('Update data incorrect', () => {
    const user = new User({ name: "Juanito", email: "Juan@gmail.com", age: 18 });
    expect(user.updateData({ name: undefined, email: "", age: 0 })).toBe('Failed data wrong');
  });

  test('Update date correctly', () => {
    const user = new User({ name: "Juanito", email: "Juan@gmail.com", age: 18 });
    user.updateData({ age: 25 , name: 'Juan'})
    expect(user.getDataUser()).toEqual({ name: "Juan", email: "Juan@gmail.com", age: 25 })
  })

  test('Update negative numbers', () => {
    const user = new User({ name: "Juanito", email: "Juan@gmail.com", age: 18 });
    user.updateData({ age: -25})
    expect(user.getDataUser()).toEqual({ name: "Juanito", email: "Juan@gmail.com", age: 18 })
  })

  test('Update max numbers', () => {
    const user = new User({ name: "Juanito", email: "Juan@gmail.com", age: 18 });
    user.updateData({ age: 250})
    expect(user.getDataUser()).toEqual({ name: "Juanito", email: "Juan@gmail.com", age: 18 })
  })
});
