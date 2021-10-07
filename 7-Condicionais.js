console.log("\nTrabalhando com Condicionais. \n");


const Cidades = new Array(
    "Sao Paulo",
    "Salvador",
    "Rio de Janeiro"
)

console.log("Destinos Possíveis:")
console.log(Cidades, '\n');

const idadeComprador = 13;
const estaAcompanhada = true;
const temPassagem = true;

/*
Existem duas maneiras de resolver este problema. O código abaixo é uma delas, porém sem operadores lógicos. O código que não está comentado utiliza Operadores Lógicos, o que facilita na leitura, manutenção e qualidade do código.
*/

/*
if (idadeComprador >= 18){
    console.log ('Sua idade é:', idadeComprador);
    console.log('Como é maior de idade, pode comprar.')
    Cidades.splice(2,1);
    console.log(Cidades);
}
else{
    // A partir daqui, vemos que a pessoa não é maior de idade. Vamos ver se ela está acompanhada por um adulto.
    if (estaAcompanhada == true){
        console.log ('Sua idade é:', idadeComprador);
        console.log('Como está acompanhada, pode comprar.');
        Cidades.splice(2,1);
        console.log(Cidades);
    }
    else{
        console.log ('Sua idade é:', idadeComprador);
        console.log('Como é menor de idade e não está acompanhada, não pode comprar.');
    }

}
*/

if (idadeComprador >=18 || estaAcompanhada == true){
    console.log ('Sua idade é:', idadeComprador);
    console.log('Como é maior de idade ou está acompanhado, pode comprar.');
    Cidades.splice(2,1);
    console.log("\nDestinos Possíveis:")
    console.log(Cidades);
}
else{
    console.log ('Sua idade é:', idadeComprador);
    console.log('Como é menor de idade e não está acompanhado, não pode comprar.')
}

console.log('\nEmbarcando....');
if(temPassagem && idadeComprador >=18){
    console.log('Boa viagem!');
}
else{
    console.log('Sem viagem para você...')
}