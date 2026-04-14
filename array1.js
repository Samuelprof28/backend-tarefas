//Lista de frutas - ARRAY

const frutas = ["Maçã", "Banana", "Uva", "Manga"];
//ÍNDICE frutas    0        1       2       3

console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas.length);
frutas[1] = "Morango"; //Altera o valor do elemento
frutas.push("Pêssego"); //Adiciona um item elemento no final
frutas.unshift("Pêra");
console.log(frutas);
console.log(frutas.length);

frutas[3] = "Abacate";
frutas.push("Melão");
console.log(frutas);

//NÃO COPIAR - 1) Alterar a fruta Uva por Abacate - 2) Adicionar Melão no último elemento da lista