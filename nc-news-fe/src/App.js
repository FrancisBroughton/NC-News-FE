import React, { Component } from 'react';
import './css/App.css';
import Topics from './components/Topics';
import Homepage from './components/Homepage'; // top 10 articles
import Articles from './components/Articles'; // all articles
import SingleArticle from './components/SingleArticle'; // 1 article - comments to be inc
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
            <ul><Link to='/Homepage'> Homepage </Link></ul> 
            <ul><Link to='/Articles'> Articles </Link></ul> 
            
            <ul><Link to='/Topics'> Topics </Link> </ul>
            </ul>
            </nav>
  

  
            <Switch>
              <Route path='/Homepage' component={Homepage} />
              <Route path='/Articles' component={Articles} />
              <Route path='//Articles/:articles_id' component={SingleArticle} />
              <Route path='/Topics' component={Topics} />
            </Switch>
        </div> 
        </BrowserRouter>
      );
    }
  }
  
export default App;