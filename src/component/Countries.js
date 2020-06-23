import React,{Component} from 'react'

class Countries extends Component{
    
    render(){
        const {countries} = this.props
        return(
            <tr>
                <td>{countries}</td>
            </tr>
        )
    }
}
export default Countries
