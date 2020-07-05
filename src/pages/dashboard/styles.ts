import styled from 'styled-components';



export const Container = styled.div`
    padding: 0;
    flex: 1;
    width: 100%;
    margin: 0;
`;

export const CardContainer = styled.div`
    position: absolute;
    padding: 1px;
    margin-top: 60px;
    margin-bottom: 60px;
    left: 50%;
    transform: translate(-50%);

    background: #FFFFFF;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    margin-top: 23px;
    div{
        display:flex;
        background: #FFFF;
        border-radius: 100px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    width: auto;

    section{
        display:flex;
        margin-bottom: 12px;
    }

    h1{
        color: #00A6CE;
        font-family: 'Lato',sans-serif;
        font-weight: 700;
        font-size: 30px;
        margin-left: 19px;
    }
    p{
        color: #999999;
        font-size: 20px;
        font-family: 'Lato', sans-serif;
    }

    h2{
        margin-top: 24px;
        color: #00A6CE;
        font-family: 'Lato', sans-serif;
       font-weight: 700;
        font-size: 32px;
        margin-bottom: 1px;
    }

    div{
        margin-bottom: 10px;
        align-items: center;
        p{
            margin-left: 8px;
            color: rgba(0, 0, 0, 0.8);
            font-family: 'Lato', sans-serif;
            font-size: 20px;
        }

        img{
            width: 18px;
            height: 17px;
        }
    }
`;

export const AsideContent = styled.section`
    display: flex;
    flex-direction: column;

    div{
        display: flex;    
    }
`;