import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { State, Action } from './types.d';

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer (state: State, action: Action){
  const {type} = action

  switch (type) {
    case 'INTERCHANGE_LANGUAGES':
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }

    case 'SET_FROM_LANGUAGE':
      return {
        ...state,
        loading: true,
        fromLanguage: action.payload
      }

    case 'SET_TO_LANGUAGE':
      return {
        ...state,
        loading: true,
        toLanguage: action.payload
      }

    case 'SET_FROM_TEXT' :
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''
      }

    case 'SET_RESULT' :
      return {
        ...state,
        result: action.payload,
        loading: false
      }
 
  
    default:
      return state;
  }
}



function App() {


  return (
    <div className="App">
      <h1>Google translate</h1>
    </div>
  )
}

export default App
