import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Popular from "./pages/Popular"
import PopularBattle from "./pages/Popular-battle"
import Weekly from "./pages/Weekly"
import WeeklyBattle from "./pages/Weekly-battle"
import Error404 from "./pages/Error404"
import Nav from './Nav'
import "./App.css"


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/favorites" component={Favorites}/>
          <Route exact path="/popular" component={Popular}/>
          <Route path="/popularBattle" component={PopularBattle}/>
          <Route exact path="/weekly" component={Weekly}/>
          <Route path="/weeklyBattle" component={WeeklyBattle}/>
          <Route path="/*" component={Error404}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
