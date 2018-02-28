import React, { Component } from 'react';
import './css/App.css';
import TopicPage from './components/TopicPage';
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
                <li><Link to='/'> Homepage </Link></li> 
                <li><Link to='/Topics'> Topics </Link> </li>
              </ul>
            </nav>
  
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/articles/:articles_id' component={SingleArticle} />
              <Route path='/topics/:topic' component={TopicPage} />
            </Switch>
        </div> 
        </BrowserRouter>
      );
    }
  }
  
export default App;