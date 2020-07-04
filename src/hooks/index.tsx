import React from 'react';

import {Authprovider} from './Auht';
import {ToastProvider} from './Toast';

const AppProvider: React.FC = ({children}) =>{
    return(
        <Authprovider>
            <ToastProvider>
                {children}
            </ToastProvider>
        </Authprovider>
    );
};

export default AppProvider;