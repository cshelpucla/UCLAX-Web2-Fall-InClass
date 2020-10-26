import React from 'react';
import styled from 'styled-components'

const Button = ({children,onClick,type='button',className=''}) => {

    return (
        <ButtonStyled className={`Button ${className}`} 
                      onClick={ onClick } 
                      type= { type }>
            {children}
        </ButtonStyled>
    )
}

export default Button;

const ButtonStyled = styled.button`
    background-color: orange;
    display: inline-block;
    marging: 10px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: 5px 5px 5px rgb(0,0,0,.4)
    
    &:active {
        box-shadow: 0px 0px 5px rgb(0,0,0,.3)
    }

    &:focus {
        background-color: #ee5b37
    } 
`