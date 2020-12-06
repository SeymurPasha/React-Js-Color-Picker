import React from 'react'
import ColorItems from './ColorItems'
import Input from './Input'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TypeAhead = styled.div`
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        flex-direction:column;
        background-color: ${props => props.color}
      `;


class Typeahead extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
        currentColor: '',
        list:[],
        }
        this.colorInput = React.createRef();
    }
    
    componentDidMount() {
    
    document.onclick = () => {
        this.hideList()
    }
    document.onkeydown = (e) => {
       if(e.keyCode === 27) {
       this.hideList()
       }
    }
    }

       
    colorHandler = (e) => {
        this.setState({
        currentColor:e.target.value
        }, () => this.filterList())
    }
    
    filterList = () => {
    let list = this.props.list.filter(color => this.state.currentColor.length !== 0 ? color.toLowerCase().includes(this.state.currentColor) : null)
    this.setState({
        list:list
    })
}
   
    setColor = (color) => {
    
    this.setState({
        currentColor:color
    })
    this.hideList()
    }
    
    hideList = () => {
    this.setState({
        list: []
        })
   
    }
    render() {

        return (
            
            <TypeAhead color = {this.state.currentColor}>
            <Input currentColor = {this.state.currentColor} colorHandler = {this.colorHandler} colorInput = {this.colorInput} />
            <ColorItems list = {this.state.list} currentColor = {this.state.currentColor} setColor = {this.setColor}  ></ColorItems>
            </TypeAhead>
        )

        
    }
    
}

TypeAhead.propTypes = {
    currentColor: PropTypes.string,
    list:PropTypes.array,
    activelement:PropTypes.string
}

export default Typeahead