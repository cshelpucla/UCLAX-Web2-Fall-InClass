import React, { useState }from 'react';
import styled from 'styled-components'
import Template from '../Shared/Template';

import Form from '../Shared/UniversalForm/Form';
import Feedback from '../Shared/UniversalForm/Feedback';
import Button from '../Shared/UniversalForm/Controls/Button';
import LabelInput from '../Shared/UniversalForm/Controls/LabelInput';
import Input from '../Shared/UniversalForm/Controls/Input';

const defaultData = [
    {id: 'username', value: '', },
    {id: 'password', value: '', }
]

const Login = () => {

    const [formData, formDataUpdate] = useState(defaultData)
    const [formStatus, formStatusUpdate] = useState('pending')
    const [feedbackMessage, feedbackMessageUpdate] = useState('no message')

    const grabFormField = (id) =>  {
        return formData.find (formField => formField.id === id);
    }
    
    const handleOnChange = (newFormField) => {
        console.log ('Handle on change', newFormField)
        
        const newFormData = formData.map((field) => {
            return (field.id === newFormField.id ) ? newFormField : field;
        });

        formDataUpdate(newFormData);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        formStatusUpdate('success')

        let errors = false
        //validate data
        formData.forEach((field) => {
                if (field.value.length < 1) {
                    errors = true
                    feedbackMessageUpdate(`The ${field.id} is required`)
                }
            }
        )

        //if invalid
        if (errors) 
        { 
            formStatusUpdate('error') 
        }
        //all passes submit data 
        else 
        { 
            feedbackMessageUpdate('Eureka, You passed our validations')
            formStatusUpdate('success') 
        }         
    }

    return (
        <LoginStyled className='Login'>
            <Template title = 'Login' >                
                <Feedback formStatus={formStatus} 
                          feedbackMessage={feedbackMessage}
                          onClose={ () => { formStatusUpdate('pending')} }/>
                
                <Form onSubmit={handleOnSubmit}>
                    <LabelInput
                        label='Username'
                        formField={ grabFormField('username') }
                        >
                        <Input formField= { grabFormField('username') }
                               onChange={handleOnChange}
                        />    
                    </LabelInput>
                    <LabelInput
                        label='Password'
                        formField={ grabFormField('password') }
                        >
                        <Input formField= { grabFormField('password') }
                               onChange={handleOnChange}
                        />    
                    </LabelInput>
                    <Button type='submit'>Login In</Button>
                </Form>
            </Template>            
        </LoginStyled>
    )
}

export default Login;

const LoginStyled = styled.div`
 
`