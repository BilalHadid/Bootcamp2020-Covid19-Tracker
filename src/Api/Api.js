import React,{Component} from 'react'
import axios from 'axios'
import {Cards} from '../component/card'
import Countries from '../component/Countries'

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
        this.setState({countries: res.data.Countries})
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
               <Cards summary={this.state.global} date={this.state.currentDate}/>
               <table>
                   <thead>
                       <tr>
                           <th>Country</th>
                           <th>New Confirmed</th>
                           <th>Total Recovered</th>
                           <th>Total Death</th>
                           
                       </tr>
                   </thead>
                   <tbody>
                       {this.state.countries.map(country => (
                           <Countries countries = {country} key={country.Country}/>
                           ))}
                   </tbody>
               </table>

            </div>
        )
    }
}
export default Api