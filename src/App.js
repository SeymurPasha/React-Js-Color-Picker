import React from 'react'
import './App.scss'
import Typeahead from './Typeahead'

function App(props) {
    return (
        <div className = 'App'>
        <Typeahead list = {props.list} />
        </div>
    )
}

export default App