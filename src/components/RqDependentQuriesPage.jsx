import axios from 'axios'
import React from 'react'
import { useQueries, useQuery } from 'react-query'

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCourceByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`)
}
const RqDependentQuriesPage = ({email}) => {
  const {data: user}=useQuery(['user', email], () => fetchUserByEmail(email))
  const channelId = user?.data.channelId

  useQuery(['courses', channelId], () => fetchCourceByChannelId(channelId), {
    enabled: !!channelId,
  })
  console.log('queryresult',user)
  return (
    <div>
      <h1>DynamicParallelPage</h1>
    </div>
  )
}

export default RqDependentQuriesPage
