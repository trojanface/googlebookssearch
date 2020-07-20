import React from 'react'

export default function Book(props) {
    return (
        <div>

            


            <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
        <div>
      <img src={props.thumbnail}  alt={`An image of ${props.title}`} />
      </div>
      <div>
      <button className="btn btn-primary mt-2" onClick={props.isSearch ? () => {props.saveBook(props)} :  () => {props.deleteBook(props)}}>{props.isSearch ? "Save to your list" : "Remove from list"}</button>
      </div>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.authors ? ` ${props.authors.map((element, index) => {return element })}`: " Unknown"}</p>
        <p className="card-text">{props.description}</p>
        <h5><a target="_blank" href={props.link}>View here</a></h5>
        
      </div>
    </div>
  </div>
</div>



        </div>
    )
}
