import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import PizzaForm from './PizzaForm'
import NavBar from './NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path='/pizza'>
          <PizzaForm />
        </Route>
      </Switch>  
    </>
  );
};
export default App;
