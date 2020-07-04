import styled from 'styled-components';

interface ButtonProps{
    isSelected: boolean;
}

export const Container = styled.div``;

export const ButtonHeader = styled.button<ButtonProps>`
    padding: 10px 29px 10px 25px;
    /* border-radius: 100px; */
    border: 0;
    margin: 0;
    font-family: 'Roboto',sans-serif;
    font-weight: 700;
    font-size: 18px;
    transition: 0.5s;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    background: ${(props) => props.isSelected ? '#00A6CE': '#F4F7FC'};
    color: ${(props) => props.isSelected ? '#FFFFFF': '#222222'};
`;

