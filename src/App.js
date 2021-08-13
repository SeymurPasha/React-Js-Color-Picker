import React from 'react'
import './App.css'
import Typeahead from './Typeahead'

function App(props) {
    return (
        <div className = 'App'>
        <Typeahead list = {props.list} />
        </div>
    )
}

export default App