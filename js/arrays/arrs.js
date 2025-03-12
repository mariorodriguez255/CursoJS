const numbers = [1,2,3,4,5];
const words = ['mario', 'amanda', 'lolo', 'ruth', 'lara'];

const arrMod = numbers.map(n => n * 2).filter(n => n < 7);
const wordsMod = words.filter(str => str.includes('a'));
const sumaNums = numbers.reduce((x,y) => {return x+y},0);
//console.log(arrMod);
//console.log(wordsMod);
console.log(sumaNums);