import React, {useEffect, useContext} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import './App.css';
import { AuthenticationContext, FirebaseContext } from './firestore/Context1';
import ViewFunction from './Components/View/View';
import Home from './Pages/Home';


function App() {
  const {setUser}=useContext(AuthenticationContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(() => {
    console.log(setUser)
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    
  })
  return (
    <div>
    
      <Router>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/sell'>
          <Create />
        </Route>
        <Route path='/view'>
          <View />
        </Route>
      </Router>


      
    </div>
  );
}

export default App;
