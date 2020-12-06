import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Color = styled.div`
      width:70%;
      padding-left:20px;
      margin:4px;
      cursor: pointer;
      &:hover {
      margin:2px;
      background-color: ${props => props.color};
      color: white;
      transition: background 0.3s ease-out;
      transform: scale(1.2);
      }
      `;

function ColorItem(props) {
    
    const makeBold = () => {
    
    const colorItem = props.color.toLowerCase().split(props.currentColor)
    return (
        <span>
        {colorItem.map((item, index) => (
        <span key = {index}>
        {item}
        {index !== colorItem.length-1 && (
        <b>{props.currentColor}</b>
        )}
        </span>
        ))}
        </span>
    )  
    }
   
    return (
        
        <Color color = {props.color}  
        onClick = {() => props.setColor(props.color)} 
        onKeyDown = {(e) => e.keyCode === 13 ? props.setColor(props.color) : null}
        tabIndex = {2}>
        {makeBold()}
        </Color>
    )
}

    Color.propTypes = {
    color: PropTypes.string,
    currentColor:PropTypes.string
}

export default ColorItem

