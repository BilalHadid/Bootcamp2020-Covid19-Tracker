import React ,{ Component}from 'react'
import {Countries} from '../component/Countries'

class ApiCountry extends Component{
    constructor(){
        super()
        this.state = {
            countries:[],
            stats: []

        }
    }
    async componentDidMount(){
        const res = await fetch("https://api.covid19api.com/countries")
        const countries = await res.json()
        this.setState({countries})
        this.state.countries.forEach(async country => {
            const res = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
            const data  = await res.json()
            if(data.length)
            this.setState(prevState => (
                {stats:prevState.stats.concat({...data[data.length - 1],CountryCode:country.ISO2})}
            ))
        })
    }
    render(){
    return (
        <div>
            
            <Countries sumary={this.state.stats} code={this.state.stats}/>
                    
                
        </div>
    )
    }
}
export default ApiCountry