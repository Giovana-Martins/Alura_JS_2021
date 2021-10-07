import {cliente} from "./Cliente.js";
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new cliente('Dora', 526483790);                               //isso é uma Instância de classe
const cliente2 = new cliente('Rodrigo', 9538763049);                               //isso é uma Instância de classe


const contaDora = new contaCorrente(1001, cliente1);

contaDora.depositar(500);
const contaRodrigo = new contaCorrente(1002, cliente2);

let valor = 200
contaDora.transferir(valor, contaRodrigo);

console.log(contaDora)
console.log(contaRodrigo.numerodeContas);