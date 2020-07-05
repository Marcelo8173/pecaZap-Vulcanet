import React, { ButtonHTMLAttributes } from 'react';
import { Container, ButtonContents} from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isButtonSelected: number;
};

const ButtonContent:React.FC<ButtonProps> = ({children,isButtonSelected,...rest}) => {
    return(
        <Container>
            <ButtonContents {...rest}
            isButtonSelected={isButtonSelected}>
                {children}
            </ButtonContents>
        </Container>
    );
};

export default ButtonContent;