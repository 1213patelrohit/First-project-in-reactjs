import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Arry from './cards';
import { Rohit } from './Home'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
   <App/>
   </BrowserRouter>
   {/* {Arry.map((item)=>{
      return(
        <>
          <Rohit img = { item.img}
          name={item.name}
            link={item.link}
            price={item.price}
          />
        </>
        
      )
    })} */}
  
    </>

   

  
);

reportWebVitals();
