import React from 'react'

export default function Book(props) {
    return (
        <div>

            


            <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={props.thumbnail}  alt={`An image of ${props.title}`} />
      <button class="btn btn-primary mt-2" onClick={props.isSearch ? () => {props.saveBook(props)} :  () => {props.deleteBook(props)}}>{props.isSearch ? "Save to your list" : "Remove from list"}</button>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.authors ? ` ${props.authors.map((element, index) => {return element })}`: " Unknown"}</p>
        <p class="card-text">{props.description}</p>
        <h5><a target="_blank" href={props.link}>View here</a></h5>
        
      </div>
    </div>
  </div>
</div>



        </div>
    )
}
