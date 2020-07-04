import React, { ButtonHTMLAttributes } from 'react';
import {Container, ButtonHeader } from './styles'


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isSelected: boolean;
};

const Button:React.FC<ButtonProps>= ({children, isSelected,...rest}) => {   

    return(
        <Container>
            <ButtonHeader
                {...rest}
                isSelected={isSelected}>
                {children}
            </ButtonHeader>
        </Container>
    );
}
 
export default Button;