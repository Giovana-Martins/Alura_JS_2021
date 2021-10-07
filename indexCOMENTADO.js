/*
Neste exercício, criaremos uma planilha para clientes de um banco. Ela deve conter o cliente e uma conta corrente.


const cliente1Nome = "Dora";
const cliente1CPF = 111222333-000;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;
 
const cliente2Nome = "Alice"
const cliente2CPF = 888555666-000;
const cliente2Agencia = 1001;
const cliente2Saldo = 0;

console.log(cliente1Nome);

Para se livrar de repetições e códigos desnecessáriamente longos, usa-se a classe. O conceito de classe é como se fosse um molde para auxiliar a organização da atribuição de informações.
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import {cliente} from "./Cliente.js";
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new cliente('Dora', 526483790);                               //isso é uma Instância de classe
// cliente1.nome = 'Dora';
// cliente1.cpf = 34985498
// Colocando o nome e o CPF entre parëntesis, economizamos linhas. O construtor já vai entender que tais valores correspondem àqueles campos.

const cliente2 = new cliente('Rodrigo', 9538763049);                               //isso é uma Instância de classe

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const contaDora = new contaCorrente(1001, cliente1);

const contaRodrigo = new contaCorrente(1001, cliente2);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
EXEMPLO DE OPERAÇÃO
contaDora.depositar(- 100);
contaDora.depositar(100);
contaDora.depositar(100);

const valorSacado = contaDora.sacar(50);
console.log(valorSacado)
console.log(contaDora);
console.log(conta3)
*/
let valor = 200;
contaDora.depositar(500);

contaRodrigo.transferir(400, contaDora);

console.log(cliente1);

console.log(cliente1._cpf);