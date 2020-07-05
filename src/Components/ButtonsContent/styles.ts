import styled from 'styled-components';

interface buttonProps{
        idIsselectd:boolean;
}

export const Container = styled.div``;

export const ButtonContents = styled.button<buttonProps>`
        width: 338px;
        height: 38px;
        color: ${(props) =>props.idIsselectd ? '#FFFF': '#4A507B'};
        background: ${(props) => props.idIsselectd ? '#43B998':"#F4F7FC"} ;
        border-radius: 100px;
        border: 0;
        font-size: 22px;
        font-family: 'Lato',sans-serif;
        font-weight: 700 ;
        margin-bottom: 32px;
`;