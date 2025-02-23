let arr = ['mario', 'amanda', 'lolo'];
let arr2 = [19,20,80];

console.log(arr);
console.log(arr2);


const arr3 = arr.concat(arr2);

console.log(arr3);
console.log(arr3.length);

//saca el primer elemento y lo devuelve
let rtn = arr3.shift();
console.log(arr3);
console.log(rtn);