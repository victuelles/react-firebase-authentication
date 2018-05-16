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
       <ul>
            <li><Link to={routes.LANDING}> Landing</Link></li>
            <li><Link to={routes.HOME}> Home</Link></li>
            <li><Link to={routes.ACOUNT}> Account</Link></li>
            <li><SignOutButton/></li>
        </ul>

const NavigationNonAuth=()=>
    <ul>
        <li><Link to={routes.LANDING}> Landing</Link></li>
        <li><Link to={routes.SIGN_IN}> Sign In</Link></li>
    </ul>
export default Navigation