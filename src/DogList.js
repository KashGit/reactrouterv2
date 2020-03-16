import React from 'react'
import PropTypes from 'prop-types'
import './DogList.css'

function DogList(props) {
    return (
        <div>
            <h1 className='display-1 text-center'>Dog list</h1>
            <div className='container'>
                <div className='row'>
            {
                props.dogs.map(d => (
                    <div className='dog col-md-4 text-center' key={d.name}>
                        <img src={d.src} alt={d.name} />
                        <h3>{d.name}</h3>
                    </div>
                ))
            }
            </div>
            </div>
        </div>
    )
}

DogList.propTypes = { dogs: PropTypes.object }

export default DogList

