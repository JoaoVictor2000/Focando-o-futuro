/*
 Buscando e contando dados em um Array

 Baseado no Array de Livros por categoria abaixo, faça os seguinte desafios:

    * Contar o número de categorias e o numero de livros
    * Contar o numero de autores 
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome 
    do autor e devolver os livros desse autor
*/

const bookByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. lechter",
            },
        ]
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ]
    },


];

const totalCategories = bookByCategory.length;

for (let category of bookByCategory) { // pegando uma categoria dentro das catgegorias de livbros
    console.log('total de livros da categoria:   ' + category.category);
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for (const category of bookByCategory) {//entrando dentro da categoria
        for (let book of category.books) {// entrando dentro do book
            if (authors.indexOf(book.author) == -1) {// indexof ( se dentro desse aray(authors), náo tem um  elemento que tem o nome do autor desse livro, por isso o -1
                authors.push(book.author)
            }
        }
    }
    console.log('Total de autores: ', authors.length)
}

/*function booksAuthor() {
    let boooksAuthor = [];
    let nameAuthor = "Augusto Cury";
    for (const category of bookByCategory) {
        for (let books of category.books) {
            if (books.author === nameAuthor) {
                boooksAuthor.push(books.title);
            }
        }
    }
    console.log("Livros do autor: ", boooksAuthor)
}*/
function booksofAuthor(author) {
    let boooksAuthor = [];
    let nameAuthor = "Augusto Cury";
    for (const category of bookByCategory) {
        for (let books of category.books) {
            if (books.author === author) {
                boooksAuthor.push(books.title);
            }
        }
    }
    console.log("Livros do autor: ", boooksAuthor)
}

countAuthors();
booksAuthor();
