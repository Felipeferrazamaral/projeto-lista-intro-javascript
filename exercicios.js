// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt('Digite altura')
const largura = prompt('Digite largura')
const areaDoRetangulo = altura * largura
console.log(areaDoRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual.')
  const anoNascimento = prompt('Digite o ano de nascimento')
  const idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura*altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 const nome = prompt('Digite seu nome.')
 const idade = prompt('Digite sua idade.')
 const email = prompt('Digite seu email.')
 console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
 
 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresFavoritas1 = prompt('qual sua cor favorita 1?')
  const coresFavoritas2 = prompt('qual sua cor favorita 2?')
  const coresFavoritas3 = prompt('qual sua cor favorita 3?')
  const coresFavoritas = [coresFavoritas1,coresFavoritas2,coresFavoritas3]
console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const retornaString = string.toUpperCase()
  return retornaString

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const custoIngresso = custo
const valorDeCadaIngresso = valorIngresso
const retornarCusto = custoIngresso / valorDeCadaIngresso
return retornarCusto
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  
 const copiaArray = array.slice()
 const primeitraTroca = copiaArray[0]
 const ultimaTroca = copiaArray[array.length-1]
 copiaArray.pop()
 copiaArray.shift()
 copiaArray.push(primeitraTroca)
 copiaArray.unshift(ultimaTroca)
 return copiaArray
 
 
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
verificaFrase = (string1.toUpperCase()===string2.toUpperCase())

return verificaFrase
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual.'))
  const anoDeNascimento = Number(prompt('Digite o seu ano de nascimento.'))
  const anoEmissaoCarteira = Number(prompt('Digite o ano da emissao da sua carteira de indentidade'))
 
  const pessoasCom20 = anoAtual - anoDeNascimento <= 20 && anoAtual - anoEmissaoCarteira >= 5
  const pessoasCom20E50 = anoAtual - anoDeNascimento > 20 && anoAtual - anoDeNascimento <= 50 && anoAtual - anoEmissaoCarteira >= 10
  const pessoasCom50Mais = anoAtual - anoDeNascimento > 50 && anoAtual - anoEmissaoCarteira >= 15

  console.log(pessoasCom20||pessoasCom20E50||pessoasCom50Mais)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const mDe4 = ano%4 === 0
  const mDe100 = ano % 100 === 0
  const mDe400 = ano % 400 === 0
  return mDe400 || (mDe4 && !mDe100)
}


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const anos = prompt('Tem mais de 18 anos?')
  const medio = prompt('Tem ensino medio?')
  const horario = prompt('Tem disponibilidade exclusivas para os horarios do curso?')

  console.log(anos === 'sim' && medio === 'sim' && horario === 'sim')

}