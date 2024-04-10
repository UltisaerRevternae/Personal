/*
Reto 1: Clase Básica con Campos Privados
Objetivo: Crear una clase llamada Contador que use un campo privado para mantener el conteo.
Tareas:
Declara un campo privado #conteo.
Añade un método incrementar() que aumente el valor de #conteo.
Añade un método valorActual() que devuelva el valor actual de #conteo.
*/

class Contador {
  #conteo = 0;
  incrementar() {
    this.#conteo++;
  }
  valorActual() {
    return this.#conteo;
  }
}
const contador = new Contador();
console.log(contador.valorActual());
contador.incrementar();
contador.incrementar();
contador.incrementar();
console.log(contador.valorActual());

/*
Reto 2: Uso de Getter y Setter Privados
Objetivo: Modificar la clase Contador para que el campo #conteo solo pueda ser modificado internamente.
Tareas:
Implementa un getter privado y un setter privado para #conteo.
Asegúrate de que #conteo no pueda ser modificado directamente desde fuera de la clase.
*/

class ContadorUpdate {
  #conteo = 0;
  incrementar() {
    this.#conteo++;
  }
  get valorActual() {
    return this.#conteo;
  }
  set valorActual(value) {
    if (value >= this.#conteo) {
      this.#conteo = value;
      return this.#conteo;
    } else {
      return console.log("Invalid Number");
    }
  }
}
const count = new ContadorUpdate();
console.log(count.valorActual);
count.incrementar();
count.incrementar();
count.incrementar();
console.log((count.valorActual = 1));
console.log(count.valorActual);
console.log((count.valorActual = 70));
console.log(count.valorActual);

/*
Reto 3: Clase con Método Estático Privado
Objetivo: Crear una clase Matematicas con un método estático privado.
Tareas:
Añade un método estático privado que realice una operación matemática, como calcular un factorial.
Implementa métodos públicos estáticos que usen este método privado para ofrecer funcionalidades específicas (por ejemplo, calcular combinaciones).
*/

class Matematicas {
  static #FACTORIAL(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.#FACTORIAL(n - 1);
  }
  static publicFactorial(value) {
    const allFactorial = {};
    for (let i = 0; i <= value; i++) {
      allFactorial[i] = this.#FACTORIAL(i);
    }
    return allFactorial;
  }
}
console.log(Matematicas.publicFactorial(12));

/*
Reto 4: Clase con Herencia y Campo Estático Privado
Objetivo: Explorar la herencia con campos estáticos privados.
Tareas:
Crea una clase base Vehiculo con un campo estático privado.
Extiende esta clase con una clase Coche.
Trata de acceder al campo estático privado desde Coche y maneja la excepción que se genera.
*/
class Vehicle {
  static #MOTOR_READY(value) {
    return value === true ? "Start" : "Wait";
  }
  static startMotor(value) {
    return Vehicle.#MOTOR_READY(value); //////// INTERESANTE entinces this hace referencia a car y como car no tiene accesoo al metodo privado da fallo pero si nombramos en el vehiculo en su metodo publico vehicule hace referencia a ese elemento padre
  }
}
class Car extends Vehicle {}
console.log(Car.startMotor(true)); // Esto imprimirá 'Start'
console.log(Car.startMotor(false)); // Esto imprimirá 'Wait'

/*
Reto 5: Clase con Encapsulación Completa
Objetivo: Diseñar una clase que use tanto campos como métodos privados para encapsular completamente sus datos.
Tareas:
Crea una clase Usuario con campos privados para nombre, edad y email.
Implementa métodos públicos para obtener y establecer estos valores.
Asegúrate de que los métodos privados validen los datos antes de actualizar los campos.
*/
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
  updateData(newData) {
    let success = 0
    for(let key in newData) {
      if (this.#data.has(key) && !!newData[key]) {
        this.#data.set(key, newData[key])
        success++
      }
    }
    return success !== 0 ? `Success data update : ${success}` : 'Failed data wrong'
  }
}
const Person1 = new User({ name: "Juanito", email: "Juan@gmail.com", age: 18 });
console.log(Person1.getDataUser());
console.log(Person1.updateData({ name : undefined, email : "", age : 0 }));
console.log(Person1.updateData({ name : "Juan", email : "", age : 16 }));
console.log(Person1.getDataUser());

/*
Reto 6: Depuración y Pruebas
Objetivo: Escribir una serie de pruebas para una clase que utilice métodos privados.
Tareas:
Elige una de las clases anteriores.
Escribe un conjunto de pruebas unitarias que verifiquen tanto los métodos públicos como el comportamiento esperado de los métodos privados.
*/

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

});
