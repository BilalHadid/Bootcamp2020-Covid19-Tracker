import React, { Fragment } from 'react';
import './App.css';
import {Header} from './component/Header'
import {Chart} from './component/Chart'
import { Cards } from './component/card'
import {Update} from './component/newUpdate'
import Api from './Api/Api'

function App() {
  return (
    <Fragment>
          <div className="App">
            <Header />
          
          </div>
          <div>
            <h2>COVID 19 Tracker</h2>
          <Cards/>
          <Api/>
          <Chart/>
          <h2 className="Updates">New Updates</h2>
              <Update/>
              
              
          </div>
     
     </Fragment>
  );
}

export default App;
