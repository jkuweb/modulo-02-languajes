// Implementa una función clone que, a par r de un objeto de entrada source devuelva
// un nuevo objeto con las propiedades de source :
function clone<T>(source: T) {
  // Asignación
  //const clone = source;
  // MISMA REFERENCIA

  // Destructuring & spread operator
  //const { ...clone } = source ?? {};
  /* NO SON EL MISMO OBJETO EN LO REFERENTE A LAS PROPIEDADES CON VALORES PRIMITIVOS PERO SI TIENEN LA MISMA REFERENCIA LAS PROPIEDADES COMPUESTAS */

  // Object.assign static method
  //const clone = Object.assign({}, source);
  /* LO MISMO QUE EL CASO ANTERIOR */

  // structuredClone() global function
  //const clone = structuredClone(source);
  /* EN ESTE CASO SI QUE SE REALIZA UN CLONADO EN PROFUNDIDAD PERO SE QUEDAN FUERA LAS FUNCIONES Y LOS SYMBOLS (LANZA ERROR) */

  // JSON.parse(JSON.stringify(source))
  //const clone = JSON.parse(JSON.stringify(source));
  /* LO MISMO QUE EL CASO ANTERIOR */

  // OPCIÓN Object_prototype
  /* En este caso, las funciónes no son la misma referencia */
  const clone = Object.create(Object.getPrototypeOf(source));
  const propNames = Object.getOwnPropertyNames(source);
  propNames.forEach(function (name: string) {
    const desc: any = Object.getOwnPropertyDescriptor(source, name);
    Object.defineProperty(clone, name, desc);
  });

  return clone;
}

const obj = {
  myName: "joseba",
  birdtDay: 1978,
  city: { name: "Donosti" },
  friends: ["Alvaro", "Laura", "Antonio"],
  calculateAge: function () {
    return `${this.myName} tiene ${2023 - this.birdtDay} años `;
  },
  sym: Symbol("name"),
};
const cloneObj = clone(obj);

/*Implementa una función merge que, dados dos objetos de entrada source y target ,
devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
de propiedades con el mismo nombre, source sobreescribe a target .
Por ejemplo, dados estos 2 objetos:*/
const a = {
  name: "Maria",
  surname: "Ibañez",
  country: "SPA",
  city: {
    name: "Donostia",
  },
};
const b = {
  name: "Luisa",
  age: 31,
  married: true,
  city: {
    name: "Bilbo",
  },
};
/*el resultado de mezclar a sobre b sería:
merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", cTIP: Puedes usar la función “clone” del apartado A.*/
function merge<T, U>(source: T, target: U) {
  // Opción B
  // const result = Object.assign({}, target, source)
  const result = { ...target, ...source };

  return result;
}

// console.log(merge(a, b));
