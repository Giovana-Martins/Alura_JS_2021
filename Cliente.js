export class cliente{
    constructor(nome, _cpf){
        this.nome = nome,
        this._cpf = _cpf
        }
    
    get cpf(){
        return this._cpf;
    }
}