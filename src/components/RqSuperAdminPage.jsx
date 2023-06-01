import React from 'react'
import { useParams } from 'react-router-dom'
import  useAdminData from '../hooks/useSuperAdminData';
const RqSuperAdminPage = () => {
  const {adminId} = useParams();
  const {isLoading,data, isError, error}=useAdminData(adminId);
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>{error.message}</h1>
  }
  console.log('dataaaa ', data, adminId)
  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  )
}

export default RqSuperAdminPage
