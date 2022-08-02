 const estudante = {
     nome : "Joana",
     sobrenome : "Dayse",
     numeroMatricula : 123456 ,
    notasDoSemestre : [ 8 , 7 , 10]

}

// console.log(estudante)
//adcionando ao OBJETO a PROPRIEDADE "MODULOO"
 estudante.modulo = "git e gitHub"
console.log(estudante)

//acessando propriedades
 console.log ("NOME: ", estudante.nome) // ponto para acessar propriedade

 console.log ("SEGUNDA NOTA:" , estudante.notasDoSemestre[1]) // acessar o indice da array

 console.log("MODULO:" , estudante.modulo)

//criando copia e alterando o nome , nota e modulo

const novoEstudante= {...estudante}
novoEstudante.nome="Matheus"

novoEstudante.notasDoSemestre= [...estudante.notasDoSemestre,9] //forma com spread

 //forma com slice e push
// novoEstudante.notasDoSemestre= estudante.notasDoSemestre.slice()
// novoEstudante.notasDoSemestre.push(9)

novoEstudante["modulo"]= "introdução a web" 
console.log("Novo Estudante:" , novoEstudante)

 //criando uma array de objetos e adicionar os obj estudante e novoEstudante
const estudantesLabenu=[] //criando uma array de objetos 
estudantesLabenu.push(estudante)
estudantesLabenu.push(novoEstudante)

console.log(estudantesLabenu)

 const carrinho = {
   nome: "Joana",
   formaDePagamento: "Credito",
   endereço: "São Luis"
 }
console.log("carrinho inicialmente:" ,carrinho);

//adicionando uma array de obj dentro de um obj
 carrinho.compras=[{ 

  nomedoProduto : "arroz",
  preco: "R$ 20,00",
  quantidade : 2
}]
// quantidade de compras 
 console.log (carrinho.compras.length)

// copia do carrinho mudando nome, forma de pagamento
const carrinhoPresente ={ ...carrinho}
carrinhoPresente.nome = "Maria"
carrinhoPresente.formaDePagamento= "debito"
console.log("IMPRESSÃO CARRINHO DE PRESENTE:", carrinhoPresente)

 









