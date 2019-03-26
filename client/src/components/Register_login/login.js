import React, { Component } from 'react';
import FormField from '../utils/Form/formField'
import { update, generateData, isFormValid } from '../utils/Form/formActions'
import { connect } from 'react-redux'

class Login extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formdata:{
            email:{
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password:{
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true,
                    password: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm= (element) =>{
        const newFormData = update(element,this.state.formdata,'login'); 
        this.setState({
            formError: false,
            formdata: newFormData
        })
    }

    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata, 'login');
        let formIsValid = isFormValid(this.state.formdata, 'login');

        if(formIsValid){
            console.log(dataToSubmit)
        }else{
            this.setState({
                formError: true
            })
        }

    }
    render() {
        return (
            <div className="signin_wrapper">
                <form onSubmit={(event)=>this.submitForm(event)}>
                    <FormField
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element)=>this.updateForm(element)}
                    />
                     <FormField
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element)=>this.updateForm(element)}
                    />

                    {this.state.formError ? 
                        <div className="error_label">
                            Please check your data
                        </div>
                    :null}
                    <button onClick={(event)=>this.submitForm(event)}>Log In</button>
                </form>
            </div>
        );
    }
}

export default connect()(Login);