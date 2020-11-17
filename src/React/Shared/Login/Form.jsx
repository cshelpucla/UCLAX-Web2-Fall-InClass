import React from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

/* Scripts */
import * as UserActions from 'Redux/user/actions.js'

/* Component ---------------------------*/
import UniversalForm from 'React/Shared/UniversalForm/UniversalForm.jsx';
import { useLocation } from 'react-router-dom';

const Form = () => {

    const dispatch = useDispatch();

    const defaultData = [
        { id: 'email', value: '', required: true, label: 'Email', type: 'text', },
        { id: 'password', value: '', required: true, label: 'Password', type: 'password', }
    ];

    const handleOnSubmit = (apiResponse) => {
        console.log('Login Form', apiResponse);
        if (!apiResponse.errors) {
            const isLoggedIn = true;
            const profile = apiResponse.payload.user;
            dispatch(UserActions.userAuthUpdate(isLoggedIn, profile))
        }
    }

    return (
        <FormStyled className='Form'>
            <UniversalForm
                formData={ defaultData }
                submitText='Log In'
                apiEndpoint='/users/login'
                onSubmit={ handleOnSubmit }
            /> 
        </FormStyled>
    );
}
export default Form;

const FormStyled = styled.div`
`;