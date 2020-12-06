import React from 'react'
import PropTypes from 'prop-types'
export default function Input(props) {
    return (
        <div className = 'input'>
        <label>Search for a Color</label>
        <input
        tabIndex = {1}
        value = {props.currentColor}
        onChange = {props.colorHandler} 
        type="text"   
        ref = {props.colorInput} 
        spellCheck = {false}/>
        </div>
    )
}


Input.propTypes = {
    currentColor:PropTypes.string
}