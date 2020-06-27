import React from 'react'
import {Countriesflag} from './Countriesflag'

export const Countries = ({sumary,code}) => {
    console.log(sumary.CountryCode)
    return (
        <div>
           <h1>Countries</h1>
           <img src={`https://www.countryflags.io/${code.CountryCode}/flat/64.png`} alt={code.Country}/>
            {sumary.map((country)=> <Countriesflag sumary={country}/>)}
           
        </div>
    )
}
