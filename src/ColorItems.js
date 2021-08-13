import React from 'react'
import ColorItem from './ColorItem'
import styled from 'styled-components'

const Items = styled.div`
      `;

export default function ColorItems(props) {
    return (
        <Items>
        {props.list.map((color,index) => <ColorItem key = {index} color = {color} currentColor = {props.currentColor}  setColor = {props.setColor} setSelectedColor = {props.setSelectedColor}/>)}
        </Items>
    )
}
