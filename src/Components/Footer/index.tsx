import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import api from '../../services/api';
import { Container,FooterHeader, FoterContent, ButtonAcont } from './styles';
import { useToast } from '../../hooks/Toast';
import formatedValue from '../../utils/formatedValue';

interface propsCost{
    cost: number;
}

interface propsDataToSend{
    name:string;
    prices: {
        monthly: number;
        yearly: number;
    };
}

interface IProps{
    seletecMouhtOrYear: boolean;
    dataToSend: propsDataToSend;
    handleSendData: (dataToSend: propsDataToSend) => void;
}

const Footer: React.FC<IProps> = ({dataToSend,seletecMouhtOrYear}) =>{

    const [counter, setCounter] = useState<number>(0);
    const [attendant, setAttendant] = useState<propsCost>({} as propsCost);
    const { addToast } = useToast();

    useEffect(() =>{
        api.get('/attendant').then(response =>{
            setAttendant(response.data);
        });
    },[])

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
    
    const Total = useMemo(() =>{
        const costT = Number(attendant.cost);
        let pricesT;
       
        if(seletecMouhtOrYear === false){
            pricesT = Number(dataToSend.prices.monthly);
        }else{
            pricesT = Number(dataToSend.prices.yearly);
        }

        const total = pricesT +  (counter * costT);
        return total;
    },[counter,attendant.cost, dataToSend])

    return(
        <Container>
            <FooterHeader>
                {console.log(seletecMouhtOrYear)}
                <section>
                    {console.log(dataToSend.prices.monthly)}
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
                        <h2>Total: {formatedValue(Total)}</h2>
                        <p>Plano selecionado: {dataToSend.name}</p>
                    </section>
                <button onClick={handleRegister} >Contratar</button>
            </FoterContent>
        </Container>
    )
}

export default Footer;