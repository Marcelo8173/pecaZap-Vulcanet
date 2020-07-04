import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
`;

export const FooterHeader = styled.div`
    margin-left: 29px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;

     h2{
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        color: #222222;
    }
    p{
        color: #00A6CE;
        font-family: "Lato";
        font-size: 16px;
    }

`;

export const FoterContent = styled.div`
    display: flex;
    align-items: center;
    background: #00A6CE;
    padding: 1px;  
    margin: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 15px 15px;

   section{
       flex: 1;
        h2{
            margin-top: 24px;
            color: #FFFFFF;
            font-size: 32px;
            font-family: 'Lato';
            font-weight: 700;
            margin-left: 29px;
        }

        p{
            color: #F5F5F5;
            font-size: 18px;
            margin-left: 29px;
            margin-bottom: 24px;
            font-family: 'Lato';
        }
   }

   button{
        background: #43B998;
        border-radius: 100px;
        width: 239px;
        height: 46px;
        border: 0;
        color: #FFFFFF;
        font-family: "Lato";
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        margin-right: 26px;
    }
`;

export const ButtonAcont = styled.div`
    display: flex;
    margin-left: 22px;
    align-items: center;

    button{
        border:0; 
        background: none;
        padding-top:5px;
        margin:0;
    }

    span{
        color: #00A6CE;
        font-size: 32px;
    }
`;