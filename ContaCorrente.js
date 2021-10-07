import {cliente} from "./Cliente.js";

export class contaCorrente{
    numerodeContas = 0
    _saldo = 0;

    constructor(agencia, cliente, numerodeContas){
        this.agencia = agencia;
        this.cliente = cliente;
        this.numerodeContas += 1;
    }

    set cliente(novoValor){
        if (novoValor instanceof cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){                               //O que há entre os parênteses é chamado de "Parâmetro"  ou "Argumentos" de classe.
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){                               //O que há entre os parênteses é chamado de "Parâmetro" ou "Argumentos" de classe.
        if(valor <=0) {
            console.log('\nInsira uma valor válido.')
            return;
        }
        else{
            this.saldo = saldo + valor;
        }
    }

    transferir(valor2, conta){
        conta.cidade = 'São Paulo';
        const valorSacado = this.sacar(valor2);
        conta.depositar(valorSacado);
    }
}
