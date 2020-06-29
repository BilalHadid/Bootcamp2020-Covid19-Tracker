import React ,{ Component}from 'react'
import {Countries} from '../component/Countries'
import {SearchBox} from '../component/searchBox'

class ApiCountry extends Component{
    constructor(){
        super()
        this.state = {
            countries:[],
            stats: [],
            searchField: ''

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
        const {stats, searchField} = this.state
        const filterCountry = stats.filter(country =>(
            country.Country.toLowerCase().includes(searchField.toLowerCase())
        ))
    return (
        <div>
            <h1 className="UpdatesTwo">Countries List</h1>
             <SearchBox placeholder="Enter Your Country Name.." handleChange={(e) => this.setState({searchField: e.target.value})}/>
            <Countries sumary={filterCountry} />
                    
                
        </div>
    )
    }
}
export default ApiCountry