console.log('\nTrabalhando com Listas\n');

//Suponha que queiramos escrever uma lista com todas as possiveis cidades que uma agencia de viagem atende. Para isso, usa-se o ARRAY.

console.log('Esta e a lista original:');

const Cidades = new Array(
    'Vitoria',
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro'
);

//Para inserir algum valor na lista, usa-se o \push\.
Cidades.push ('Curitiba');
console.log(Cidades);

/*
A função do push é inserir algo dentro do Array.
A função do splice é retirar algo de dentro do Array.
    A sintaxe do splice requer dois números: o primeiro, que é a posição a qual você deseja começar a excluir itens, e a quantidade de itens que deseja remover.
    Cuidado! Listas começam do 0!
*/

Cidades.splice(3,1);
console.log(Cidades);
console.log[1];