import React,{Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import * as routes from '../constants/routes'
import {auth,db} from '../firebase'

const SignUpPage = ({history}) => 
    <div>
      
        <SignUpForm history={history}/>
    </div>

const INITIAL_STATE= {
    username:'',
    email:'',
    passwordOne:'',
    passwordTwo:'',
    error:null,
    iAgree:''
}
const byPropKey =(propertyName,value)=>()=>({
    [propertyName]:value,
})
class SignUpForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {...INITIAL_STATE}
    }

    onSubmit=(event)=>{
        const {username,email,passwordOne,iAgree}=this.state;
        const {history}=this.props
        auth.doCreateUserWithEmailAndPassword(email,passwordOne)
            .then(authUser=>{
                //create a user in your own  accessible FB database too
                console.log('-- authUser=',authUser);

                db.doCreateUser(authUser.user.uid,username,email)
                .then(()=>{
                    this.setState(()=>({...INITIAL_STATE}))
                    history.push(routes.HOME)
                })
                .catch(error=>{
                    this.setState(byPropKey('error',error))
                })
            })
            .catch(error=>{
                this.setState(byPropKey('error',error))
            })
        event.preventDefault() 
    }
    render() { 
        const {username,email,passwordOne,passwordTwo,error,iAgree} = this.state
        
        const isInvalid=
                passwordOne!==passwordTwo ||
                passwordOne===''||
                email===''||
                username===''
               

        return (
        <div className="container"  style={{marginTop:40+'px'}}>
         <div className="row">
           <form className="form-horizontal" onSubmit={this.onSubmit}>
            <h2 className="text-center">Sign Up</h2>
            
				
			<div className="form-group">   
                <input value={username}  className="form-control input-lg" 
                    onChange={event=>this.setState(byPropKey('username',event.target.value))}
                    type='text'
                    placeholder='Full Name'
                    />
			</div>
				
			
            <div className="form-group">
                <input value={email}   className="form-control input-lg" 
                        onChange={event=>this.setState(byPropKey('email',event.target.value))}
                        type='text'
                        placeholder='Email Address'
                    />			
            </div>
            <div className="row">
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
                    <input value={passwordOne} className="form-control input-lg" 
                        onChange={event=>this.setState(byPropKey('passwordOne',event.target.value))}
                        type='text'
                        placeholder='Password'
                     />
                    </div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
                    <input value={passwordTwo} className="form-control input-lg" 
                        onChange={event=>this.setState(byPropKey('passwordTwo',event.target.value))}
                        type='text'
                        placeholder='Confirm Password'
                     />					
                    </div>
				</div>
			</div> 
               
            <div className="row">
				<div className="col-xs-4 col-sm-3 col-md-3">
					<span className="button-checkbox">
						<label className="checkbox">
                        <input value={iAgree} className="btn btn-primary" data-dismiss="modal"
                        onChange={event=>this.setState(byPropKey('iAgree',event.target.value))}
                        type='checkbox'
                      />	I Agree
                      </label>
					</span>
				</div>
				<div className="col-xs-8 col-sm-9 col-md-9">
					 By clicking <strong className="label label-primary">Register</strong>, you agree to the <a href="#" data-toggle="modal" data-target="#t_and_c_m">Terms and Conditions</a> set out by this site, including our Cookie Use.
				</div>
			</div>
            <div className="row">
				<div className="col-xs-12 col-md-6">
               
                <button disabled={isInvalid}  className="btn btn-primary btn-block btn-lg" type ='submit'>
                        Register
                 </button>
                </div>
				<div className="col-xs-12 col-md-6"><a href="/signin" className="btn btn-success btn-block btn-lg">Sign In</a></div>
			</div>
          
                			 
 
              

                {error && <p>{error.message}</p>}
            </form>
            </div>
        </div>
         )
    }
}
 
const SignUpLink = () => 
    <p>
            Don't have a account?
            {'  '}
            <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
 




export default withRouter(SignUpPage);

export { 
    SignUpForm,
    SignUpLink
}
