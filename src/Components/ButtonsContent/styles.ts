import styled from 'styled-components';

interface propsButton{
    isButtonSelected: number;
}

export const Container = styled.div``;

export const ButtonContents = styled.button<propsButton>`
        width: 338px;
        height: 38px;
        background: ${(props) =>props.isButtonSelected ? "#F4F7FC" : 'red' } ;
        border-radius: 100px;
        border: 0;
        font-size: 22px;
        color: #4A507B;
        font-family: 'Lato',sans-serif;
        font-weight: 700 ;
        margin-bottom: 32px;    
`;