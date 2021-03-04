import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './LoginComponent';
import Home from './HomeComponent';
import Register from './RegisterComponent';

export default function Main(){

    return(
        <>
        <Switch>
            <Route path="/login"><Login/></Route>
            <Route path="/register"><Register/></Route>
            <Route path="/home"><Home/></Route>
            <Redirect to="/home"/> 
         </Switch>
        </>
    )
}