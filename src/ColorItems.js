import React from 'react'
import ColorItem from './ColorItem'

export default function ColorItems(props) {
    return (
        <div className = 'color-items'>
        {props.list.map((color,index) => <ColorItem key = {index} color = {color} currentColor = {props.currentColor}  setColor = {props.setColor} setSelectedColor = {props.setSelectedColor}/>)}
        </div>
    )
}
