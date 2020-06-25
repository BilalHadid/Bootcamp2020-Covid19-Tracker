import React, { Fragment } from 'react';
import './App.css';
import {Header} from './component/Header'
import Api from './Api/Api'
import Graph from './Api/ApiGraph'
import {Countries} from './component/Countries'
 
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
             <Countries/>
     
     </Fragment>
  );
}

export default App;
