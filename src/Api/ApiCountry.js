import axios from 'axios'

const url = "https://api.covid19api.com/countries";

const fetchPost = async () => {
    try {
        const {data
            
        } =await axios.get(url)
        
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
export default fetchPost