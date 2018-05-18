import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import AuthUserContext from './AuthUserContext'
import {firebase} from '../firebase'

const withAuthorization = (Component) => {
    class WithAuthorization extends Component {
   
        render() { 
            return <Component/>
        }
    }
     
    return WithAuthorization
}
 