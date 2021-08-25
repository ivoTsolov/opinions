import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './Components/Smart/About/About';
import Blog from './Components/Smart/Blog';
import  ErrorPage  from './Components/Dumb/ErrorPage/ErrorPage'
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
import Footer from './Components/Dumb/Footer';
import PostDetails from './Components/Smart/Blog/Post/PostDetails/PostDetails';
import Auth from './Components/Smart/Auth/Auth';

 

function App() {
  return (
  <div className='page-container'>
    <div className='content-wrap'>
    <Router> 
      <Navigation/>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route exact path = '/about' component={About}/>
        <Route exact path = '/blog' component={Blog}/>
        <Route exact path = '/auth' component={Auth}/>
        <Route exact path= '/postdetails/:id' children={<PostDetails/>}/>
        <Route exact path = '*' component={ErrorPage}/>
      </Switch>
    </Router>
    </div>
    <Footer/>
  </div>
  );
}

export default App;
