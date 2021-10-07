console.log('\n Trabalhando com atribuição de variáveis\n');

let idade = 18;
const primeiroNome = 'Dora';
const sobrenome = "Martenz";
const ano = 2021;

console.log('O nome dela é', primeiroNome, sobrenome, 'e ela tinha', idade, "anos em", ano + ".");

//Outra forma de escrever é usando crases \`\ e cifrão e chaves \${}\ por exemplo:
console.log(`O nome dela é ${primeiroNome} ${sobrenome} e ela tinha ${idade} anos em ${ano}.`);


//Abaixo vamos ver um exemplo de por que \const\ é importante.
//Nome = Nome + sobrenome;
//Houve uma tentativa de atribuir um novo valor à **constante** "nome". A mesma é protegida. Caso essa variável tivesse sido estabelecida por um \let\, aí sim poderíamos mudar seu valor ao longo do código.


// Por questões de otimização de código e boas práticas, tente sempre deixar suas variáveis serem definidas por \const\.
const Nome = primeiroNome+ " " + sobrenome
console.log( Nome );

//Usa-de o let, principalmente para variáveis que você sabe que vão variar. Por exemplo, uma variável contadora.

let contador = 0
contador - contador ++;
console.log(contador);

Idade = ano-idade;
console.log(Idade);