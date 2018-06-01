import React,{Component} from 'react'
import { withRouter} from 'react-router-dom'
import * as routes from '../constants/routes'
import {auth} from '../firebase'
import {SignUpLink} from './SignUp'
import {PasswordForget, PasswordForgetLink} from './PasswordForget'

const SignInPage = ({history}) => 
<div>
   
    <SignInForm history={history}/>

</div>

const byPropKey =(propertyName,value)=>()=>({
    [propertyName]:value,
})
const INITIAL_STATE= {
    email:'',
    password:'',
    error:null
}

 
class SignInForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {...INITIAL_STATE}
    }

    onSubmit=(event)=>{
        const {email,password}=this.state;
        const {history}=this.props

        auth.doSigInWithEmailAndPassword(email,password)
            .then(()=>{
                this.setState(()=>({...INITIAL_STATE}))
                history.push(routes.HOME)
            })
            .catch(error=>{
                this.setState(byPropKey('error',error))
            })
        event.preventDefault() 
    }
    render() { 
        const {email,password,error} = this.state
        
        const isInvalid=  
                password===''||
                email===''
           

        return ( 
            <div className="container"  style={{marginTop:40+'px'}}>  
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2>Please Login</h2>
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
                            <span className="text-danger align-middle">
                             {error && <p>{error.message}</p>}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="sr-only" for="password">Password</label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-key"></i></div>
                            <input value={password} className="form-control" 
                        onChange={event=>this.setState(byPropKey('password',event.target.value))}
                        type='password' 
                        placeholder='Password'
                     />
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-control-feedback">
                        <span className="text-danger align-middle">
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6" style={{paddingTop: '.35rem'}}>
                    <div className="form-check mb-2 mr-sm-2 mb-sm-0">
                        <label className="form-check-label">
                            <input className="form-check-input" name="remember"
                                   type="checkbox" />
                            <span style={{paddingBottom:'.15rem'}}>Remember me</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingTop: '1rem'}}>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <button disabled={isInvalid} type="submit" className="btn btn-success"><i className="fa fa-sign-in"></i> Login</button>
                    <PasswordForgetLink/>
                    <SignUpLink />
                </div>
            </div>
      
         </form>
     </div>
         )
    }
}
export default withRouter(SignInPage)
export {
    SignInForm
}