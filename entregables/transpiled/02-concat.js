"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 2-CONCAT
var elements_1 = [2, 3];
var elements_2 = [1, 3, true, "hello", 6];
var elements_3 = ["hello", "world"];
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. U liza rest / spread operators.
var concat = function (a, b) {
    // Opción B
    // return Array.prototype.concat(a, b)
    return __spreadArray(__spreadArray([], a !== null && a !== void 0 ? a : [], true), b !== null && b !== void 0 ? b : [], true);
};
console.log(concat(elements_1, elements_2));
// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múl ples arrays de
// entrada (más de 2).
var concat_v2 = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return elements === null || elements === void 0 ? void 0 : elements.reduce(function (prev, acc) { return Array.prototype.concat(prev, acc); });
};
console.log(concat_v2(elements_1, elements_2, elements_3));
