import React from 'react';
import styled from 'styled-components'
import Button from './Controls/Button';

const Feedback = ({formStatus, onClose, feedbackMessage}) => {

    if (formStatus === 'pending' ) {
        return '';
    }
    
    let bColor = (formStatus === 'success') ? 'green' : 'maroon';

    return (
        <FeedbackStyled  className='Feedback' theColor={bColor}>
            <Button className='close' onClick={onClose}>X</Button>
            <h2>Title</h2>
            <div className="message">
                {feedbackMessage}
            </div>
        </FeedbackStyled>
    )
}

export default Feedback;

const FeedbackStyled = styled.div`
    border: solid 1px ${({theColor}) => theColor};
    max-width: 500px;
    margin: 20px auto;

    position: relative;
    
    .close {
        position: absolute;
        right: 5px;
        top: 5px;
        padding: 5px 10px;
        margin: 0px;
    }

    h2 {
        color: white;
        background-color: ${({theColor}) => theColor};
        padding: 20px;
        max-width: 500px;
        margin: 0px auto;
    }

    .message {
        padding: 10px;
    } 
`