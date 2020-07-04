import React, { ButtonHTMLAttributes } from 'react';
import { Container} from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const ButtonContent:React.FC<ButtonProps> = ({children,...rest}) => {
    return(
        <Container >
            <button {...rest}>
                {children}
            </button>
        </Container>
    );
};

export default ButtonContent;