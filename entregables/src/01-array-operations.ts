const numberElements = [1, 2, 3, 4];
const stringElements = ["hello", "world"];
const elements = [true, 12, "Hello"];

// ### 1. Array operations

// #### Head

// Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = <T>(elements: T[]) => {
  const [firstElement = 0] = elements ?? [];

  return firstElement;
};

// console.log(head(numberElements));
// console.log(head(stringElements));
// console.log(head(elements));

// #### Tail

// Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

// REST OPERATOR -> NO LO PUEDO UTILIZAR PORQUE RECIBO UN ARRAY
// (_first, ...elements)
// _first -> [1,2,3,4]
// elements -> []
// SI NO FUERA UN ARRAY, ENTONCES SÍ
// tail(1, 2, 3, 4)
// const tail = (_first, ...rest)
// _first -> 1
// ...rest -> [2,3,4]

const tail = <T>(...elements: T[]) => {
  // opcion a
  const [_firstElement, ...restElement] = elements ?? [];
  return restElement;

  //opción b
  // const copy = [...elements]
  // copy.shift();
  // return copy;
};

// console.log(tail(1, 2, 3, 4, 5, 6));
// console.log(tail("first", "second", "third", "fourth"));
// console.log(tail<number | boolean | string>(1, true, "hello"));

// #### init

// implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. utiliza los métodos que ofrece array.prototype.

const init = <T>(elements: T[] = []) => {
  // const copy = [...elements];
  // copy.pop();
  // return copy;

  const lastElement = elements?.slice(0, -1);
  return lastElement;
};

// console.log(init(numberElements));
// console.log(init(stringElements));
// console.log(init(elements));


//  ### last
// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el úl mo elemento.

const last = <T>(elements: T[]) => {
  // Opción A
  return elements?.at(-1) ?? []

  // Opción B
  // return elements[elements.length - 1];

  // Opción C (devuelve un array)
  // return elements.slice(-1)

  // Opción D
  // const [...copy] = elements ?? []
  // return copy.pop()

};

console.log(last(numberElements));
console.log(last(stringElements));
console.log(last(elements));
