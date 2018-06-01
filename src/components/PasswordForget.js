import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../firebase'
import * as routes from '../constants/routes'

const PasswordForgetPage = () => 
    <div>
       
        <PasswordForgetForm />
    </div>
 
 const byPropKey =(propertyName,value)=>()=>({
    [propertyName]:value,
})
const INITIAL_STATE= {
    email:'',
    error:null
}

class PasswordForgetForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }
    }
    onSubmit=(event)=>{
        const {email}=this.state;
    

        auth.doPasswordReset(email)
            .then(()=>{
                this.setState(()=>({...INITIAL_STATE}))
               
            })
            .catch(error=>{
                this.setState(byPropKey('error',error))
            })
        event.preventDefault() 
    }
    render() { 
        const {email,error} = this.state
        
        const isInvalid=   email===''
           

        return ( 
         <div className="container"  style={{marginTop:40+'px'}}>  

            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2>Forgot Password</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="form-group has-danger">
                            <label className="sr-only" for="email">E-Mail Address</label>
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon" style={{width: 2.6+'rem'}}><i className="fa fa-at"></i></div>
                                <input value={email} className="form-control" 
                            onChange={event=>this.setState(byPropKey('email',event.target.value))}
                            type='email'
                            placeholder='Email address'
                            />                       
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-control-feedback">
                        <button disabled={isInvalid} className="btn btn-primary" type ='submit'>
                           Reset my Password
                         </button>
                        </div>
                    </div>
                </div>

              


                {error && <p>{error.message}</p>}
            </form>
          </div>
         )
    }
}
 
const PasswordForgetLink=()=>
    <p>
        <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>

export { PasswordForgetForm,
        PasswordForgetLink
}

export default PasswordForgetPage;