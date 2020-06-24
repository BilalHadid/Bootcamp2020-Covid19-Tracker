import React,{Component} from 'react'
import axios from 'axios'
import {Cards} from '../component/card'
import {Update} from '../component/newUpdate'
import '../App.css'
// import Countries from '../component/Countries'

class Api extends Component{
   
    state ={
        countries: [],
        currentDate: null,
        global: [],
        loading : true
    }
    async componentDidMount(){
        const res = await axios.get("https://api.covid19api.com/summary")
        console.log(res)
        this.setState({Countries: res.data.countries})
        this.setState({currentDate: res.data.Date})
        this.setState({global: res.data.Global})
        this.setState({loading: false})
    }
    render(){
        if(this.state.loading){
            return <h1>Loadding....</h1>
        }
        
        return(
            <div>
            <div className="firstCard">
               <Cards summary={this.state.global} date={this.state.currentDate}/>
               <hr/>
            </div>
            <div className="secondCard">
            <h2 className="Updates">New Updates</h2>
                <Update updation={this.state.global}/>
            </div>
            </div>
        )
    }
}

export default Api