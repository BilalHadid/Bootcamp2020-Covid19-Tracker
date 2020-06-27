import React from 'react'

export const Countriesflag = ({sumary}) => {
    return (
        <div>
            <img src={`https://www.countryflags.io/${sumary.CountryCode}/flat/64.png`} alt={sumary.Country}/>
            <p>{sumary.Country}</p>
        </div>
    )
}
