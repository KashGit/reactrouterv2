import React from 'react'
import {Link} from 'react-router-dom'

export default function DogDetails({ dog }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <img className="card-image-top" src={dog.src} alt={dog.name}></img>
                        <div className="card-body">
                            <h1 className="card-title">{dog.name}</h1>
                            <h3 className="card-subtitle text-muted">{dog.age} years old</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            {
                                dog.facts.map((fact, i) => ( <li className="list-group-item" key={i}>{fact}</li> ))
                            }
                        </ul>
                        <div className="card-body">
                            <Link to='/dogs' className="btn btn-info">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
