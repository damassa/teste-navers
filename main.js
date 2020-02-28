//Exercício 1
const comprimento = (string1, string2) => {
    if (string1.length > string2.length) { //Verificação se o tamanho da primeira string é maior do que o tamanho da segunda.
        console.log(string1);
    } else console.log(string2);
}
console.log('Exercício 1');
comprimento('teste', 'teste maior');

console.log('----------------------');

//Exercício 2: Não entendi direito o enunciado, por isso fiz o que eu achei que faria sentido.
let f = (f2, string, outraString) => {
    console.log('Primeira função: teste');
    var f2 = (string, outraString) => {
        let s1 = string.length;
        let s2 = outraString.length;
        return s1+ s2;
    }
    console.log('Segunda função: ' + f2('aaaa', 'bbbb'));
}
console.log('Exercício 2');
f('teste','outro teste');

console.log('----------------------');

//Exercício 3
const print = (a,b,c,d,e) => {
    console.log(a+b+c+d+e); //Concatena as strings.
}
console.log('Exercício 3');
print('este ','é ','um ','teste ','da nave-rs');

console.log('----------------------');

//Exercício 4
const frase = 'teste 1 de 2 string 3';
console.log("Exercício 4");
console.log(frase.replace(new RegExp("[0-9]","g"), "[removido]")); //Troca os números pela palavra escolhida com o uso de RegExp.

console.log('----------------------');

//Exercício 5
let frase2 = "T35t3 d3 35t4g1o";
    frase2 = frase2.replace(/4/g,"a");
    frase2 = frase2.replace(/3/g,"e");
    frase2 = frase2.replace(/1/g,"i");
    frase2 = frase2.replace(/5/g,"s");
console.log("Exercício 5");
console.log(frase2);

console.log('----------------------');

//Exercício 6
console.log("Exercício 6");
axios.get('https://viacep.com.br/ws/96010630/json/')
    .then(function(res) {
        let endereco = res.data.logradouro.toUpperCase();
        let cep      = res.data.cep;
        let cidade   = res.data.localidade.toUpperCase();
        let estado   = res.data.uf.toUpperCase();
        //Meu número não apareceu no objeto, por isso botei o CEP pra não ficar feio.
        //E fiz um outro console.log() com o número posto no braço mesmo.
        console.log(endereco +','+ ' ' +cep +','+ ' ' + cidade + '/' + estado);
        console.log(endereco +','+ ' ' +'2271' +','+ ' ' + cidade + '/' + estado);
    })
    .catch(function(err) {
        console.log(err);
    });

console.log('----------------------');

//Exercício 7
console.log('Exercício 7');
const Pessoas = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

for (let i=0; i<4; i++) {
    let nome = Pessoas[i].nome.substr(0,1).toUpperCase() + Pessoas[i].nome.substr(1,Pessoas[i].nome.length);
    let sobrenome = Pessoas[i].sobrenome.substr(0,1).toUpperCase() + Pessoas[i].sobrenome.substr(1,Pessoas[i].sobrenome.length);

    console.log('Olá, '+nome+ ' '+sobrenome+'!');
}
console.log('----------------------');

//Exercício 8
console.log("Exercício 8");
const resultado = Pessoas.reduce(function(acc,obj) {return acc+obj.idade;}, 0);
console.log(resultado);

console.log('----------------------');

//Exercício 9
console.log("Exercício 9");
const less = (obj) => obj.idade < 25;
const less25 = (obj) => obj.idade == -25;
console.log(Pessoas.some(less));
console.log(Pessoas.some(less25));

console.log('----------------------');

//Exercício 10
console.log('Exercício 10');
const map1 = Pessoas.map(function(obj) {
    for (var i=0; i<3; i++) {
        if (obj.idade < 30 == true) {
            console.log(obj.id + ' ' + obj.nome + ' ' + obj.sobrenome);
        }
    }
});

//Exercício 11
console.log('Exercício 11');
Pessoas.sort(function(y,z) {
    if(y.idade < z.idade) {
        return 1;
    } if (y.idade > z.idade) {
        return -1;
    } if(y.id === z.id && y.id < z.id) {
        return 1;
    } else return -1;
});

console.log(Pessoas);