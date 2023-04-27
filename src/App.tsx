import { useState, useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {useStore} from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/icons';
import { LanguageSelector } from './components/LanguageSelector';

function App() {

 const {fromLanguage, setFromLanguage, setToLanguage, toLanguage, interchangeLanguages} = useStore()


  return (
    <Container fluid>
      <h1>Google translate</h1>
      <Row>
        <Col>
        <LanguageSelector onChange={setFromLanguage}/>
        </Col>
        <Col>      
        <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages} >
          <ArrowsIcon/>
        </Button>
        </Col>
         
        <Col>
        <LanguageSelector onChange={setToLanguage}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
