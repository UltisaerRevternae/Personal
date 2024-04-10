
class User {
  #data;

  constructor({ name, email, age }) {
    this.#data = new Map();
    this.#data.set('name' , name)
    this.#data.set('email' , email)
    this.#data.set('age' , age)
  }
  getDataUser() {
    return {
      name: this.#data.get('name'),
      email: this.#data.get('email'),
      age: this.#data.get('age')
    };
  }
  #isValidUpdate(key, value) {
    if (typeof value === 'number') {
      return value > 0 && value < 100
    } else if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return false;
  }
  updateData(newData) {
    let success = 0;
    for (let key in newData) {
      if (this.#data.has(key) && this.#isValidUpdate(key, newData[key])) {
        this.#data.set(key, newData[key]);
        success++;
      }
    }
    return success !== 0 ? `Success data update : ${success}` : 'Failed data wrong';
  }
}

const Person1 = new User({ name: "Juanito", email: "Juan@gmail.com", age: 18 });
console.log(Person1.getDataUser());
console.log(Person1.updateData({ age: -10, name: 'Juan'}));
console.log(Person1.getDataUser());
module.exports = User