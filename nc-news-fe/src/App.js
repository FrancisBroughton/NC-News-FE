import React, { Component } from 'react';
import './css/App.css';
import Articles from './components/Articles';
import Topics from './components/Topics';
import {
   BrowserRouter,
   Route,
   Link,
   Switch
} from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div className="main-container row">
            <nav className="navbar row">
            <ul>
            <ul><Link to='/Home'> Home </Link></ul> 
            <ul><Link to='/Articles'> Articles </Link></ul> 
            <ul><Link to='/Topics'> Topics </Link> </ul>
            </ul>
            </nav>
  

  
            <Switch>
              <Route path='/Home' component={App} />
              <Route path='/Articles' component={Articles} />
              <Route path='/Topics' component={Topics} />
            </Switch>
        </div> 
        </BrowserRouter>
      );
    }
  }
  
export default App;