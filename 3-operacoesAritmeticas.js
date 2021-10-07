console.log("\n Operações Aritméticas \n");

/*
Neste caso, a ordem de execução do JS vai priorizar o 8*2 e somente depois somar os 10. Um ser humano lê na seguinte ordem:
    (10 + 8 = 18)
    (16 * 2 = 36)
Já o JS, por conta da prioridade dos operadores aritméticos ( + - % * ** > <) lê como:
    (8 * 2 = 16)
    (16 * 2 = 26)
*/

console.log( 2 + 2 );
console.log (10 + 8 * 2);

// O modo correto de escrever seria:
console.log((10 + 8) * 2);

//O JS também consegue juntar tipos diferentes. Por exemplo:
console.log("Ano" + 2020);

//Ou, caso não for cuidadoso... receber resultados ilógicos..
console.log('2' + '2');

