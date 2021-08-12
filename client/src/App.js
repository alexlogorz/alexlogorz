import React, { useReducer, useEffect } from 'react';
import './css/App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import NavbarContext from './components/NavbarContext';
import Contact from './components/pages/Contact'

const initialState = {
  sidebar: false,
}

function reducer(state, action) {
  switch(action.type) {
    case 'TOGGLE_SIDEBAR':
      return {...state, sidebar: !state.sidebar};
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <NavbarContext.Provider value={{state, dispatch}}>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/projects'>
              <Projects/>
            </Route>
            <Route exact path='/contact'>
              <Contact/>
            </Route>
          </Switch>
        </Router>
      </NavbarContext.Provider>
    </>
  );
}

export default App;
