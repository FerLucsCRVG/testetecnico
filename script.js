/// TESTE TÉCNICO -- Fernando Lucas Costa dos Santos

/// TESTE 01 - Fibonacci

let numeroSelecionado = 7;
let numerosFib = [];
let numbTotal = 0;

function fibonacci(){

    if(numerosFib.length < 2){
        numerosFib.push(1)
        return 1;
    }else{
        numbTotal = numerosFib[numerosFib.length-2] + numerosFib[numerosFib.length-1]
        numerosFib.push(numbTotal)
        console.log(numerosFib)
        return numbTotal
    }
}

function testFibonacci(numeroSelecionado){
    for(let i =0;i<20;i++){
        let result = fibonacci();
    
        if(result == numeroSelecionado){
            console.log("TEM ESSE NÚMERO NA TABELA FIBONACCI");
            break;
        }
    
        if(result > numeroSelecionado){
            console.log("NÃO TEM ESSE NÚMERO NA TABELA FIBONACCI");
            break;
        }
    
    }
}

testFibonacci(numeroSelecionado)


/// TESTE 02 - Verificação de Letra

let letraEscolhida = 'a'
let fraseVerificada = "O agir de deus é lindo"


function verificadorDeLetras(fraseVerificada,letraEscolhida){
    let qtsVezes = 0;

    for(let i=0;i<fraseVerificada.length;i++){
        if(fraseVerificada[i].toUpperCase() == letraEscolhida.toUpperCase()){
            qtsVezes++;
        }
    }

    if(qtsVezes > 0){
        console.log(`A letra ${letraEscolhida.toUpperCase()} foi ocorrida ${qtsVezes} Vez(es).`)
    }else{
        console.log(`A letra ${letraEscolhida.toUpperCase()} não aparece na frase.`)
    }

    
}

verificadorDeLetras(fraseVerificada,letraEscolhida)


/// TESTE 03 - O RESULTADO DA SOMA

let indice = 12
let soma = 0
let k = 1

for(;k<indice;){
    k++
    soma = soma + k
    console.log(soma)
}


/// TESTE 04 - DESCOBRINDO A LÓGICA

/*

A - 9
B - 128
C - 49
D - 100
E - 13
F - 20

*/

/// TESTE 05 - TESTES DAS LÂMPADAS

/*

PRIMEIRO EU LIGO 2 INTERRUPTORES E VOU NAS SALAS SABER QUAL EU NÃO ESTÁ LIGADA ( JÁ SEI UMA)
AGORA EU VOLTO NA SALA DESLIGO APENAS UMA E VOLTO NAS SALAS PARA SABER QUAL DESLIGOU

*/