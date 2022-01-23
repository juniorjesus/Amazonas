import React, { useState, useEffect } from "react";
import {Puff} from 'react-loading-icons'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Login from '../components/Login';
import { Registro } from '../components/Registro';
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import {useDispatch} from 'react-redux';
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { loginEmailPassword } from "../actions/actionLogin";
import Navbar from "../components/Navbar";
// import Navbar2 from "../components/Navbar2";
import App from "../components/App";
export default function AppRouter() {

const dispatch = useDispatch();

const [checking, setChecking] = useState(true);
const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
     const auth = getAuth();
     onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(loginEmailPassword(user.uid,user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false); 
    }); 
  }, [dispatch, setChecking,  setIsLoggedIn])

  if(checking){
    return(
      <div style={{display: 'flex', margin:"15rem 30rem",}}>
      <Puff stroke="#98ff98" strokeOpacity={.125} speed={.75} />
       <h1>Cargando....</h1>
         
</div>
    )
  }

  return (
    <Router>
      <div>
      <Navbar />   
        <Switch>
        <PublicRoute
            exact
            path="/"
            component={App} 
            isAuthenticated={ isLoggedIn }
            />
            
          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={ isLoggedIn }
          />
 
          <PublicRoute
            exact
            path="/registro"
            component={Registro} 
            isAuthenticated={ isLoggedIn }
            />

          <PrivateRoute
            path="/auth"
            component={DashboardRouter}
           isAuthenticated={ isLoggedIn }
          />
        </Switch>
      </div>
    </Router>
  );
}