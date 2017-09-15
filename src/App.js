import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Index from './components/index/index'
import List from './components/list/index'
import RouterPart from './components/index/routePart'
import {Router, Route, hashHistory} from 'react-router'

class App extends Component {
  render() {
    return (
        <Router history={hashHistory}>
          
            <Route component={Index} path="/">
                <Route component={RouterPart} path="RouterPart"></Route>
            </Route>
            <Route component={List} path="list"></Route>
           
        </Router>
    );
  }
}
// ReactDOM.render(<App />, document.getElementById('root'));
export default App;
