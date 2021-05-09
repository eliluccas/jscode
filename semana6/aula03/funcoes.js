//Desestruturação de arrays
/*
let numeros = [1,2,3,4,5,6,7];
console.log(numeros);
let [a,b,c,d] = numeros;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/
// Reduce
// Pega um array e diminui a um só resultado

let numeros = [1,2,3,4,5,6,7,8];
const soma = numeros.reduce(function(resultado,item){
    return resultado + item;
})

//console.log(soma);

//Filter - Escolher um determinado condição de números

const filtro = numeros.filter(item=>item>6)
console.log(filtro);
const alunos = [
    {name: 'João', nota:8},
    {name: 'José', nota:10},
    {name: 'Artur', nota:5},
    {name: 'Carlos', nota:6},
];

const aprovados = alunos.filter(aluno=>aluno.nota>=7);

console.log(aprovados);