import React, { useState, useCallback, useEffect } from 'react';
import ButtonHeader from '../../Components/ButtonHeader';
import AsidesCard from '../../Components/Asides';
import ButtonContent from '../../Components/ButtonsContent';
import Check from '../../assets/Vector-check.png';
import Vector from '../../assets/Vector.png';
import Footer from '../../Components/Footer';
import formatedValue from '../../utils/formatedValue';
import { Container,CardContainer, Header, Content, AsideContent} from './styles';
import api from '../../services/api';


interface PlansProps{
    id: number;
    name: string;
    description: string;
    features: Array<string>;
    prices: {
        monthly: number;
        yearly: number;
    };
}

interface propsDataToSend{
    name:string;
    prices: {
        monthly: number;
        yearly: number;
    };
}

const Dashboard: React.FC = () =>{

    const [selectedYear, setSelectedYear] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(true);
    const [selectButtonId, setSelectButtonId] = useState<number>(2);
    const [datas,setDatas] = useState<PlansProps[]>([]);

    const [dataToSend, setDataToSend] = useState<propsDataToSend>({
        name:'Plano 2.0',
        prices: {
            monthly: 250,
            yearly: 230
        }
    } as propsDataToSend);
    
    useEffect(() => {
        api.get('/plans').then(response =>{
            setDatas(response.data);
        });
    },[]);

    const handleSelectedButton = useCallback(() =>{
        setSelectedYear((state) => !state);
        setSelectedMonth((state) => !state);
    },[]);

    const handleSelectButtonContent = useCallback((data: propsDataToSend ) => {
        setDataToSend(data);
    },[])


    return(
        <Container>
            <CardContainer>
                <Header>
                    <ButtonHeader 
                        onClick={handleSelectedButton} 
                        isSelected={selectedMonth}>
                            Mensal 
                    </ButtonHeader>
                    
                    <ButtonHeader 
                        onClick={handleSelectedButton}
                        isSelected={selectedYear}>
                            Anual
                    </ButtonHeader>
                </Header>

                <Content>
                    {console.log()}
                    {   datas ? 
                        datas.map(data =>(
                            <AsidesCard key={data.id}>
                                <section>
                                    <img src={Vector} alt=""/>
                                    <h1>{data.name}</h1>
                                </section>
                                <p>{data.description}</p>
                                <h2>{selectedYear ? formatedValue(data.prices.yearly) : formatedValue(data.prices.monthly)}</h2>
                                <ButtonContent isButtonSelected={selectButtonId} onClick={() => handleSelectButtonContent(data)}>SELECIONAR</ButtonContent>
                                <AsideContent>
                                    {data.features.map(fetature => (
                                        <div key={fetature} >
                                            <img src={Check} alt="check"/>
                                            <p>{fetature}</p>
                                        </div>
                                    ))}                                
                                </AsideContent> 
                            </AsidesCard>
                        )): <div>Erro</div>
                    }                   
                </Content>
                
                <Footer 
                    seletecMouhtOrYear={selectedYear}
                    dataToSend={dataToSend}
                    handleSendData={handleSelectButtonContent} 
                />          
                
            </CardContainer>
        </Container>
    );
}

export default Dashboard;