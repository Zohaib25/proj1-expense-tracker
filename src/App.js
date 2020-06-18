import React from 'react';
import './App.css';

//Importing component from component section

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses }  from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { Footer } from './Footer/Footer';


import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
    
    <Header/>
    <div className="container">
       <Balance />
       <IncomeExpenses/>
       <TransactionList/>
       <AddTransaction/>
       <Footer/>

    </div>
    </GlobalProvider>
  ); 
}

export default App;
