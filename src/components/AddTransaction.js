import React, {useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] =useState();
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        /*if (Number(amount) === 0) {
            alert('Please enter the transaction amount in numbers');
            return false;
        }
        if (text.length === 0){
            alert('Please enter the required transaction Name')
            return false;
        }*/
        /*if (isNaN(amount))  {
            alert('Please enter the transaction amount in numeric keywords');
            return false;
        }
        var regex=/^[A-Za-z]+$/;
        if (text.match(regex)){
            return true;
        }
            else
            {
                alert('Please enter the required transaction name in alphabet characters');
                return false;
            }*/
        if (isNaN(amount))  {
            alert('Please enter the transaction amount in numeric keywords');
            return false;
        }
        var matches = text.match(/\d+/g);
        if (matches != null) {
           alert('Please enter alphabet character');
           return false;
           
}
    
    const newTransaction = {
        id: Math.floor(Math.random()* 100000000),
        text,
        amount: +amount
    }
    addTransaction(newTransaction);
    setAmount('');
    setText('');
    }
    return (
        <>
           <h3>Add new Transaction</h3> 
           <form onSubmit={onSubmit}> 
           <div className="form-control"> 
            <label htmlFor="text">Text</label>
            <input type="text"  value={text} onChange={(e)=>{setText(e.target.value)}}
             placeholder="Enter text..."
             required = "required></input>

           </div>
           <div className="form-control">
               <label htmlFor="amount">Amount <br/>
               (negative -expense, positive -income)</label>
               <input type="amount" value={amount} onChange={(e)=>{setAmount(e.target.value)}} 
               placeholder="Enter amount..."
               required = "required/>

           </div>
           <button className="btn">Add transaction</button>
           </form>
        </>
    )
}
