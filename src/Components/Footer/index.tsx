import React, { useState, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Container,FooterHeader, FoterContent, ButtonAcont } from './styles';
import { useToast } from '../../hooks/Toast';

const Footer: React.FC = () =>{

    const [counter, setCounter] = useState<number>(0);
    const { addToast } = useToast();

    const handleAddCounter = useCallback(() =>{
        setCounter(counter+1);
    },[counter]);

    const handleTakeOutCounter = useCallback(() =>{
        if(counter === 0){
            return;
        }
        setCounter(counter-1);
    },[counter]);

    const handleRegister = useCallback(() =>{
        
        addToast({
            type: 'sucess',
            title: 'Compra efetuada com sucesso',
            description: '',
        });

    },[addToast]);
    
    return(
        <Container>
            <FooterHeader>
                <section>
                    <h1>Atendentes</h1>
                    <p>+R$130/mês por atendente</p>
                </section>
                <ButtonAcont>
                    <button onClick={handleTakeOutCounter} >
                        <FiChevronLeft size={28} color="#00A6CE" />
                    </button>
                    <span>{counter}</span>
                    <button onClick={handleAddCounter} >
                        <FiChevronRight size={28} color="#00A6CE" />
                    </button>
                </ButtonAcont>
            </FooterHeader>
            <FoterContent>
                <section>
                    <h2>Total: R$380/mês</h2>
                    <p>Plano selecionado: Plano 2.0 - Mensal</p>
                </section>
                <button onClick={handleRegister} >Contratar</button>
            </FoterContent>
        </Container>
    )
}

export default Footer;