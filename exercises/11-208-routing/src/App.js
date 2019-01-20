import React, { Component } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Error from './Error';

/*
01. Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)
02. Add a simple navigation with two links => One leading to "Users", one leading to "Courses"
03. Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)
04. Pass the course ID to the "Course" page and output it there
05. Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)
06. Load the "Course" component as a nested component of "Courses"
07. Add a 404 error page and render it for any unknown routes
08. Redirect requests to /all-courses to /courses (=> Your "Courses" page)
*/

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/Users'>Users</Link>
                </li>
                <li>
                  <Link to='/Courses'>Courses</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Redirect from='/All-Courses' exact to='/Courses'/>
            <Route path='/Users' exact component={Users}/>
            <Route path='/Courses' exact component={Courses}/>
            <Route path='/' exact/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
