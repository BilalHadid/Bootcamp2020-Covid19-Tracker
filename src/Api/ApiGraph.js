import React,{useEffect,useState} from 'react'
import Chart  from '../component/Chart'

const  Graph = () => {
   
    let data = {total: "Waiting for Data"}
    const [todo, setTodo] = useState(data)
    const [isData, setData] = useState(false)
    const [isfetching, setfetching] = useState(false)
     useEffect(() =>{
       async function fetchData(){
           setfetching(true)
           const response = await fetch("https://covid19-update-api.herokuapp.com/api/v1/cases/graphs")
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
              <Chart dailyData={todo.graphs.dailyCases} categories={todo.graphs.dailyCases.categories}/>
            </div>
        )
    }
    

export default Graph