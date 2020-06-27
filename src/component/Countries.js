import React from 'react'
import {Countriesflag} from './Countriesflag'

export const Countries = ({sumary}) => {
    console.log(sumary.CountryCode)
    return (
        <div>
           <h1>Countries</h1>
           
            {sumary.map((country)=> <Countriesflag key={country.CountryCode} sumary={country}/>)}
           
        </div>
    )
}
