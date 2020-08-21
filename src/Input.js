import React from 'react'
import PropTypes from 'prop-types'
export default function Input(props) {
    return (
        <div className = 'input'>
        <label>Search for a Color</label>
        <input value = {props.currentColor} onChange = {props.colorHandler} type="text"  autoFocus tabIndex = '1' spellCheck = {false}/> 
        </div>
    )
}


Input.propTypes = {
    currentColor:PropTypes.string
}