import styled from 'styled-components';

interface ButtonProps{
    isSelected: boolean;
}

export const Container = styled.div``;

export const ButtonHeader = styled.button<ButtonProps>`
    padding: 10px 29px 10px 25px;

    border-radius: 100px;
    border: 0;
    margin: 0;
    font-family: 'Roboto',sans-serif;
    font-weight: 700;
    font-size: 18px;
    transition: 0.4s;
    background: ${(props) => props.isSelected ? '#00A6CE': 'transparent'};
    color: ${(props) => props.isSelected ? '#FFFFFF': '#222222'};
`;

