const livros = require ('./database')
//console.log(livros)


// pegar o input
// Se sim, mostra as categorias disponiveis e pergunta qual escolhe
// se não mostra todos os livros pela quantidade de paginas



const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja Buscar um livro? S/N')

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('Terror', '/Fantasia', '/Romance')

    const entradaCategoria = readline.question('Qual Categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.páginas - b.páginas )
    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}

