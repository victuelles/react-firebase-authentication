import React from 'react';
import {Link} from 'react-router-dom'
import AuthUserContext from './AuthUserContext'
import * as routes from '../constants/routes'
import SignOutButton from './SignOut';

const Navigation = () =>
    <AuthUserContext.Consumer> 
            {authUser=>authUser? <NavigationAuth/>:<NavigationNonAuth/>}
    </AuthUserContext.Consumer>

const NavigationAuth=()=>
<nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
<div class="container">
  <a class="navbar-brand" href="#">Firebase React</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item"><Link className="nav-link" to={routes.LANDING}> Landing</Link></li>
        <li class="nav-item"><Link className="nav-link" to={routes.HOME}> Home</Link></li>
        <li class="nav-item"><Link className="nav-link" to={routes.ACOUNT}> Account</Link></li>
        <li class="nav-item"><SignOutButton/></li>
        </ul>
        </div>
      </div>
    </nav>

const NavigationNonAuth=()=>
<nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
<div class="container">
  <a class="navbar-brand" href="#">Firebase React</a>
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
export default Navigation