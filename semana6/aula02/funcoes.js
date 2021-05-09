
/*let lista = ['frango', 'carne','peixe','maçã', 'aveia', 'laranja','melancia'];

lista.forEach(minhaFuncao);

function minhaFuncao(item){
    console.log(item)
}

function modificalista(...vogais){
    console.log(vogais);
}
//rest parameters
modificalista('a','e','i','o','u')

// Spread Operators
let comidas = [...lista,'suco','uva','abaxi']
    console.log(comidas);

*/



//percorre o array e executa um comando repassado a ele

// mantem o array original, e passa os valores

let numeros = [3,4,5,6,7];

let copia = numeros.map(item=>item*2);

console.log(copia);

