import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Project.css'



function Project(props) {
  return (
    <div className='projez'>
      <div className='left'>
        <img src={props.image} alt='project'/>
      </div>
      <div className='rite'>
        <p>{props.name}</p>
        <h6>{props.description}</h6>
        <a href={props.link}>
          <button >
            view
          </button>
        </a>
          
      </div>
          
    </div>
  )
}

Project.propTypes = {}

export default Project
