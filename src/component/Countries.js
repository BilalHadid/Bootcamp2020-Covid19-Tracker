import React,{useState,useEffect} from 'react'
import fetchPost from '../Api/ApiCountry'

export const Countries = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const data = async () => {
            setData(await fetchPost())
        }
        data()
    },[])
    console.log(data)
   if(!setData){
       return <p>...lOading</p>
   }
    return (
        <div>
            {data.map((a) => {
                <p>{a.Country}</p>
            })}
        </div>
    )
}
