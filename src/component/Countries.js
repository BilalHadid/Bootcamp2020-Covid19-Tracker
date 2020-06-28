import React from 'react'
import {Countriesflag} from './Countriesflag'

export const Countries = ({sumary}) => {
    return (
        <div>
           
           
            {sumary.map((country)=> <Countriesflag key={country.CountryCode} sumary={country}/>)}
           
        </div>
    )
}
