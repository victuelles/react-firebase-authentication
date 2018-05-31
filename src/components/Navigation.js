import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import AuthUserContext from './AuthUserContext'
import * as routes from '../constants/routes'
import SignOutButton from './SignOut';
import logo from "./logo3.png";
import { stack as Menu } from 'react-burger-menu'

const Navigation = () =>
    <AuthUserContext.Consumer> 
            {authUser=>authUser? <NavigationAuth/>:<NavigationNonAuth/>}
    </AuthUserContext.Consumer>

const NavigationAuth=()=>
<nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
<div class="container">
  <a class="navbar-brand" href="/"> <img src={logo} className="logo" alt="logo" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ml-auto">
        <li className="nav-item"><Link className="nav-link"  activeClassName="active" to={routes.LANDING}> Home</Link></li>
        <li className="nav-item"><Link className="nav-link" activeClassName="active" to={routes.HOME}> Token Sale</Link></li>
        <li className="nav-item"><Link className="nav-link" activeClassName="active" to={routes.ACOUNT}> Account</Link></li>
        <li className="nav-item"><SignOutButton/></li>
        </ul>
        </div>
      </div>
    </nav>


class NavigationNonAuth extends Component {
    state = {}
    render() { 
      return  (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container">
                <a  href="/"><img src={logo} className="navbar-brand logo" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                               <li className="nav-item "><Link className="nav-link {className}" activestyle={{ color: 'red' }} activeclassname="active" to={routes.LANDING}> Home</Link></li>
                                <li className="nav-item"><Link className="nav-link {className}" activestyle={{ color: 'red' }} activeclassname="active" to={routes.SIGN_IN}> Sign In</Link></li>
                   </ul>
                </div>
            </div>
        </nav>
      )
    }
}
 
const NavigationNonAuth1=()=>
<Menu right  >
<a id="home" className="menu-item" href="/">Home</a>
<a id="about" className="menu-item" href="/about">About</a>
<a id="contact" className="menu-item" href="/contact">Contact</a>
<a  className="menu-item--small" href="">Settings</a>
</Menu>
/*

<nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div class="container">
        <a class="navbar-brand" href="/"><img src={logo} className="logo" alt="logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><Link className="nav-link" to={routes.LANDING}> Landing</Link></li>
                        <li class="nav-item"><Link className="nav-link" to={routes.SIGN_IN}> Sign In</Link></li>
                        </ul>
        </div>
   </div>
</nav>
*/

export default Navigation