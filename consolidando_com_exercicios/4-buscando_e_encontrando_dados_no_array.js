/*
    * Buscando e contandom dados em Arrays*
    
    Baseado no Arra do Livros por Categoria abaixo, faça os seguintes desafios:

        * Contar e número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Marv Eker',
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            },
        ],
    },
]

const totalCategories = booksByCategory.length

const totalBooksByCategory = function(category) {
    let totalBooks
    for (let data in booksByCategory) {
        if (booksByCategory[data].category.toUpperCase() === category.toUpperCase()) {
            totalBooks = booksByCategory[data].books.length
        }
    }
    return `Existem ${totalBooks} livros nesta categoria`
}

const totalAuthors = function(category) {
    let numTotalAuthors = []
    let numArray
    if (category.toUpperCase() === 'RIQUEZA') {
        numArray = 1
    } else if (category.toUpperCase() === 'INTELIGÊNCIA EMOCIONAL') {
        numArray = 0
    }
    for (let data of booksByCategory[numArray].books) {
        if (numTotalAuthors.includes(data.author) === false) {
            numTotalAuthors.push(data.author)
        }
    }
    return `Existem ${numTotalAuthors.length} autores na coleção.`
}

const AugustoCuryBooks = function(authorName) {
    let author = authorName
    let bookObject = {
        category: '',
        books: []
    }
    for (let numCategories in booksByCategory) {
        for (let properties in booksByCategory[numCategories]) {
            if (properties === 'books') {
                for (let booksProperties of booksByCategory[numCategories][properties]) {
                    for (let booksData in booksProperties) {
                        if (booksData == 'author') {
                            if (booksProperties[booksData] == author) {
                                bookObject['category'] = booksByCategory[numCategories]['category']
                                bookObject['books'].push(booksProperties['title'])
                            }
                        }
                    }
                }
            }
        }
    }
    return bookObject
}