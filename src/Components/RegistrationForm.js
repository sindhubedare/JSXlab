import React from 'react';
class RegistrationForm extends React.Component{

    constructor (props){
        super(props);
        this.state={
            value: ''
        };
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
       
    }
    handleChange= (event)=> {
        this.setState ({
            value: event.target.value ,
            password: event.target.password
        })
    }

    handleSubmit = (event)=> {
       alert('submitted: ' + this.state.value)
       event.preventDefault(); 
    }
    render() {
        return(
            <form onSubmit= {this.handleSubmit}> 
                <label>
                    Text: 
                    <input type = 'text' value= {this.state.value} onChange= {this.handleChange} />
                </label>
                <label>
                    Password: 
                    <input type = 'text' value = {this.state.password} onChange= {this.handleChange.password} />
                </label>
                <input value= 'submit' type= 'submit' />
               
            </form>
        )
    }
}
export default RegistrationForm;