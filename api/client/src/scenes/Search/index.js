import React, {useState, useEffect} from 'react'
import API from '../../services/API';
import Book from '../../components/Book';
import MenuBar from '../../components/MenuBar';

export default function Search() {
    const [searchList, setSearchList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

function searchGoogle(event) {
    event.preventDefault();
    API.findBooksGoogle(searchTerm).then((res) => {
        
        setSearchList(res.data.items);
    }
    ).catch((err) => {
        console.log(err)
    });
}

    useEffect(() => {
        console.log(searchList)
    }, [searchList])

function updateTerm (event) {
setSearchTerm(event.target.value);
}

function saveBook (book) {
API.addBook(book);
}

    return (
        <div>
            <MenuBar />
            <div className="container">
            <div class="mb-3">
            <form onSubmit={searchGoogle}>
  <h1>Find a hefty tome</h1>
  <input type="text" class="form-control" value={searchTerm} onChange={updateTerm} placeholder="Search by title"></input>
  <div class="col-auto">
  <button type="submit" class="btn btn-primary mt-2 mb-3">Search</button>
  </div>
  </form>
</div>
            


            <h3>Search Results:</h3>
            <ul>
            {searchList.map((element,index) => {
                return <li key={index}><Book isSearch={true} saveBook={saveBook} title={element.volumeInfo.title} thumbnail={element.volumeInfo.imageLinks.smallThumbnail} description={element.volumeInfo.description}
                authors={element.volumeInfo.authors} link={element.volumeInfo.canonicalVolumeLink}/></li>
                
            })}
            </ul>
            </div>
        </div>
    )
}
