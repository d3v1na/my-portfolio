import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Project.css'
import { Button } from "./Button.jsx";


function Project(props) {
  return (
    <div className='projez'>
        <p>{props.name}</p>
        <h6>{props.description}</h6>
        <Button variant="outlined" pill>
          Outlined Pill
        </Button>
    </div>
  )
}

Project.propTypes = {}

export default Project
