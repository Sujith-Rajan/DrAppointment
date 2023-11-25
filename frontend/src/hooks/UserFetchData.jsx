
import { token } from '../config'
import { useEffect,useState } from 'react'



const UserFetchData = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
   
     
    useEffect(()=>{
        const fetchData = async () =>{

            setLoading(true)

           try{
       
           
            const res = await fetch(url, {
            
                headers: { Authorization:`Bearer ${token}` },
              });
              
              
              const result = await res.json()


             
        
            if(!res.ok){
                console.error('Response not okay:', res);
               throw new Error(result.message + '!Results not found')
            }

            setData(result.data)
            setLoading(false)

           }
           catch(err){
            console.error('Fetch error:', err);
            setLoading(false)
            setError(err.message)
           }
        }
        fetchData()
    },[url])
   
  return  {
    data,
    loading,
    error
  }
}

export default UserFetchData