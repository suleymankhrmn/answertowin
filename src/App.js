import React from 'react';
import Start from './components/Start';
import {Route, Switch} from 'react-router-dom'
import Questions from './components/Questions';
import { Row } from 'react-bootstrap';
import './static/css/styles.css'

function App() {
  return (
    <Row>
      <Switch>
        <Route path="/" exact component={Start}/>
        <Route path="/questions"  component={Questions}/>
      </Switch>
      
    </Row>
  );
}

export default App;
