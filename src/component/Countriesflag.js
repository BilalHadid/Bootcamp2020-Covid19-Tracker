import React from 'react'

export const Countriesflag = ({sumary}) => {
    return (
        <div>
            <img src={`https://www.countryflags.io/${sumary.CountryCode}/flat/64.png`} alt={sumary.Country}/>
            <p>{sumary.Country}</p>
            <div>
                <p>{`Active : ${sumary.Active}`}</p>
                <p>{`Confirmed : ${sumary.Confirmed}`}</p>
                <p>{`Deaths : ${sumary.Deaths}`}</p>
                <p>{`Recovered : ${sumary.Recovered}`}</p>
            </div>
        </div>
    )
}
