import React,{Component,useEffect,useState} from 'react'
import {Cards} from '../component/card'
// import Countries from '../component/Countries'

const Api = () => {
   
    let data = {Countries: "Waiting for Data"}
    const [todo, setTodo] = useState(data)
    const [isData, setData] = useState(false)
    const [isfetching, setfetching] = useState(false)
     useEffect(() =>{
       async function fetchData(){
           setfetching(true)
           const response = await fetch("https://api.covid19api.com/summary")
           console.log('response ', response)

           let data2 = await response.json()
           setfetching(false)
           setTodo(data2)
           
           console.log('data', todo)
           
   }
   fetchData();
   },[isData])
   if(isfetching){
       return <div>Loading.....</div>
   }
        return(
            <div>
               <Cards summary={todo.Countries} date={todo.Date}/>
              

            </div>
        )
    }

export default Api