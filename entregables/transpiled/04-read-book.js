"use strict";
// 5-READ BOOKS 
// Crea una función isBookRead que reciba una lista de libros y un tulo y devuelva si se
// ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano. En caso de no
// exis r el libro devolver false
// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
function sanitizeString(text) {
    text = text === null || text === void 0 ? void 0 : text.trim();
    text = text === null || text === void 0 ? void 0 : text.toLowerCase();
    text = text === null || text === void 0 ? void 0 : text.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // ñ-> n, ó -> o
    return text;
}
function isBookRead(books, titleToSearch) {
    if (books === void 0) { books = []; }
    return books === null || books === void 0 ? void 0 : books.some(function (book) { return sanitizeString(titleToSearch) === sanitizeString(book.title) && book.isRead; });
}
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Devastación"));
// console.log(isBookRead()) // false
