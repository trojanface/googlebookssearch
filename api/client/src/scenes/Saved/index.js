import React, { useState, useEffect } from 'react'
import API from '../../services/API'
import MenuBar from '../../components/MenuBar';
import Book from '../../components/Book';

export default function Saved() {

    const [bookList, setBookList] = useState([]);
    
    function getBooks () {
        API.getBooks().then((res) => {
            console.log(res.data);
            setBookList(res.data);
        }).catch((err) => {
            console.log(err);
        })
    };

    useEffect(() => {
        getBooks()
    }, []);

    function deleteBook (book) {
        console.log(book.id)
        API.deleteBook(book.id).then(getBooks());
    }

    return (
        <div>
            <MenuBar />
            <div className="container">
            <h1>Your Saved Books</h1>
            <ul>
            {bookList.map((element,index) => {
                return <li key={index}><Book id={element._id} isSearch={false} deleteBook={deleteBook} title={element.title} thumbnail={element.image} description={element.synopsis}
                authors={[element.author]} link={element.link}/> </li>
            })}
            </ul>
            </div>
        </div>
    )
}
