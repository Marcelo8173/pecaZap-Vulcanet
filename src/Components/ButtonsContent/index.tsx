import React, { ButtonHTMLAttributes } from 'react';
import { Container, ButtonContents} from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    idIsselectd: boolean;
};

const ButtonContent:React.FC<ButtonProps> = ({children,idIsselectd,...rest}) => {
    return(
        <Container>
            <ButtonContents {...rest}
                idIsselectd={idIsselectd}
            >
                {children}
            </ButtonContents>
        </Container>
    );
};

export default ButtonContent;