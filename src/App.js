import React, { Fragment } from 'react';
import './App.css';
import {Header} from './component/Header'
import Api from './Api/Api'
import Graph from './Api/ApiGraph'
 
function App() {
  return (
    <Fragment>
              <div className="App">
                <Header />
              </div>

              <div>
              </div>
              <div>
              
                 <Api/>
              </div>
         
             <Graph/>
     
     </Fragment>
  );
}

export default App;
