// 2-CONCAT
const elements_1 = [2, 3]
const elements_2 = [1, 3, true, "hello", 6]
const elements_3 = ["hello", "world"]
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. U liza rest / spread operators.
const concat = <T>(a: T[], b: T[]) => {
  // Opción B
  // return Array.prototype.concat(a, b)
  return [...a ?? [], ...b ?? []]
};

console.log(concat(elements_1, elements_2))

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múl ples arrays de
// entrada (más de 2).

const concat_v2 = <U>(...elements: U[][]) => {
  return elements?.reduce((prev, acc) => Array.prototype.concat(prev, acc))
};

console.log(concat_v2(elements_1, elements_2, elements_3))