import React from 'react';
import AuthUserContent from './AuthUserContext'
import {PasswordForgetForm} from './PasswordForget'
import PasswordChangeForgetForm from './PasswordChange'
import AuthUserContext from './AuthUserContext';
import withAuthorization from './withAuthorization'
const AccountPage = () => 
<AuthUserContext.Consumer>
    {authUser =>
        <div>
            <h1>Account: {authUser.email}</h1>
            <PasswordForgetForm />
            <PasswordChangeForgetForm/>
        </div>
    }
</AuthUserContext.Consumer>
const authCondition =(authUser)=>!!authUser;

export default withAuthorization(authCondition)(AccountPage)