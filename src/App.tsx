import React from 'react';
import AppProvider from './hooks/index';
import Dashboard from './pages/dashboard';
import GlobalStyles from './styles/GlobalStyles';

function App() {

  return (
   <>
      <AppProvider>
        <Dashboard />
      </AppProvider>
      <GlobalStyles />
   </>
  );
}

export default App;
