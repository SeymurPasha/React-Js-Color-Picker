import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputDiv = styled.div`
       display:flex;
       justify-content:center;
       width:100%;
       margin:20px;
       label {
           margin-right:10px;
       }
      `;

export default function Input(props) {
    return (
        <InputDiv>
        <label>Search for a Color</label>
        <input
        tabIndex = {1}
        value = {props.currentColor}
        onChange = {props.colorHandler} 
        type="text"   
        ref = {props.colorInput} 
        spellCheck = {false}/>
        </InputDiv>
    )
}


Input.propTypes = {
    currentColor:PropTypes.string
}