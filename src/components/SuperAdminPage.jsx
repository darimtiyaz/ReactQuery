import React,{useState, useEffect} from 'react'
import axios from "axios"
const SuperAdminPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:4000/superAdmin').then((response)=>{
      setData(response.data);
      setIsLoading(false);
    }).catch((error)=>{
      setError(error.message);
      setIsLoading(false);
    })
  },[]);

  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(error){
    return <h2>error</h2>
  }

  return (
    <div>
      <h1>SuperAdminPage</h1>
      {data.map((item)=>{
        return <div key={item.name}>{item.name}</div>
      })}
    </div>
  )
}

export default SuperAdminPage
