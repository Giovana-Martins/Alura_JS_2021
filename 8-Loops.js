/*
Neste exercíciom mudamos um pouco o funcionamento do esquema de passagem (\temPassagem\). 
Agora, ela começa falsa, pois não sabemos se a pessoa vai ter a possibilidade de comprar a passagem ou não. A verificação ocorre nos ifs, e a atribuição do true ou false agora depende das condições impostas pelos mesmos.

Também foi utilizado o \while\, da seguinte maneira:
O contador recebe a quantidade de itens na lista e opera de acordo com esses itens. O if propõe que, se o valor inserido na variável \destino\ estiver presente na lista, o programa retorna que o destino existe. Caso contrário, ele retorna que o destino não existe.

O \while\ e o contador vão verificar linha por linha, item por item até o final da lista e tratar os elementos dela de acordo com as condições do \if\.
*/

console.log('\n Trabalhando com Loops\n\n');

const Cidades = new Array(
    'São Paulo',
    'Rio de Janeiro',
    'Salvador'
);

console.log('Destinos Possíveis:', Cidades , "\n");

const idadeComprador = 12;
const estaAcompanhada = true;
let temPassagem = false;
const destino = 'São Paulo';

const podeComprar = idadeComprador>=18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

console.log('Sua idade é:', idadeComprador);
console.log('Está acompanhado?', estaAcompanhada);
console.log('O seu destino escolhido foi:', destino);

while (contador<3){
    if (Cidades[contador] == destino){
        destinoExiste = true;
        break;
    }
    else{
        contador ++;
    }
}

//Usando For:
//A primeira coluna serve para indicar a situação inicial, a segunda para a condição que pode ser usada no while, e a terceira, o que fazer caso for quebrado.

for( let contador2 = 0; contador2 < 3; contador ++){
    if (Cidades[contador] == destino){
        destino == true;
    }
    break;
}

console.log('O destino selecionado existe?', destinoExiste);

if (podeComprar && destinoExiste){
    temPassagem = true;
    console.log("Tem passagem?", temPassagem, "\n");
    console.log("Boa viagem!!!");
}
else{
    console.log("Ocorreu um erro... revise suas informações.")
}