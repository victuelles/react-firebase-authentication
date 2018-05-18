import React,{Component} from 'react'
import {auth} from '../firebase'



const INITIAL_STATE= {
    passwordOne:'',
    passwordTwo:'',
    error:null
}
const byPropKey =(propertyName,value)=>()=>({
    [propertyName]:value,
})
class PasswordChangeForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {...INITIAL_STATE}
    }

    onSubmit=(event)=>{
        const {passwordOne}=this.state;
      
        auth.doPasswordUpdate(passwordOne)
            .then(authUser=>{
                this.setState(()=>({...INITIAL_STATE}))
              
            })
            .catch(error=>{
                this.setState(byPropKey('error',error))
            })
        event.preventDefault() 
    }
    render() { 
        const {passwordOne,passwordTwo,error} = this.state
        
        const isInvalid=
                passwordOne!==passwordTwo ||
                passwordOne===''
  
        return ( 
            <form onSubmit={this.onSubmit}>
                 <input value={passwordOne} 
                        onChange={event=>this.setState(byPropKey('passwordOne',event.target.value))}
                        type='text'
                        placeholder='New Password'
                 />
                <input value={passwordTwo} 
                        onChange={event=>this.setState(byPropKey('passwordTwo',event.target.value))}
                        type='text'
                        placeholder='Confirm New Password'
                 />
                <button disabled={isInvalid} type ='submit'>
                     Reset my password
                </button>

                {error && <p>{error.message}</p>}
            </form>
         )
    }
}
 





export default PasswordChangeForm;


