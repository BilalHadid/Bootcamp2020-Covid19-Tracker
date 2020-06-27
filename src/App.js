import React from 'react';
import './App.css';
import {Header} from './component/Header'
import Api from './Api/Api'
import Graph from './Api/ApiGraph'
import ApiCountry from './Api/ApiCountry'
 
function App() {
  return (
    <div>
              <div className="App">
                <Header />
              </div>

              <div className="country">
                
              
                 <Api/>
              
         
             <Graph/>
             
             <ApiCountry/>
             </div>
     </div>
  );
}

export default App;
