import React from 'react';
import { AsideCard } from './styles';

const Asides: React.FC = ({children}) =>{
    return (
        <AsideCard>
            {children}
        </AsideCard>
    )
}

export default Asides;