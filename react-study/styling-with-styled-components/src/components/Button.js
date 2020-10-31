import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
    appearance: none;
    background-color: ${props => props.theme.regalBlue};
    border: 1px solid white;
    color: white;
    padding: 0.25em 0.5em;
    transition: background-color 0.25s, color 0.25s;

    &: hover {
        background-color: white;
        color:  ${props => props.theme.regalBlue};
        cursor: pointer;
    }
`
const Button = () => {
  return <MyButton>Click me!</MyButton>     
}

export default Button;