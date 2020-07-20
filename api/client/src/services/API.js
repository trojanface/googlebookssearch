import axios from "axios";

export default {
    getBooks: function () {
        return axios.get("/api/books")
    },
    findBooksGoogle: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    addBook: function (book) {
        let authorReturn = "";
        if (book.authors !== undefined) {
            console.log("true")
            if (book.authors.length > 1) {
                authorReturn = book.authors.join();
            } else {
                authorReturn = book.authors[0]
            }
        } else {
            console.log("false")
            authorReturn = "Unknown"
        }
        return axios.post('/api/books',{title: book.title, author: authorReturn, synopsis: book.description, link: book.link, image: book.image})
    },
    deleteBook: function (id) {
        return axios.delete(`/api/books/${id}`)
    }
}

//TODO need to add new books from the google API to the db and then delete books from db and then general styling
