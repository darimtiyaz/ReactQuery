import axios from 'axios'
import React from 'react'
import { useQueries, useQuery } from 'react-query'

const fetchSuperAdmin = (id) => {
  return axios.get(`http://localhost:4000/superAdmin/${id}`)
}
const DynamicParallelPage = ({adminIds}) => {
  const queryResult=useQueries(
    adminIds.map((id)=>{
      return {
        queryKey: ['super-admin', id],
        queryFn: () => fetchSuperAdmin(id),
      }
    })
  )
  console.log('queryresult',queryResult)
  return (
    <div>
      <h1>DynamicParallelPage</h1>
    </div>
  )
}

export default DynamicParallelPage
