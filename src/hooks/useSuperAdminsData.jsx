import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import axios from 'axios'
import { request } from '../utils/axios-utils'
const useSuperAdminsData = (onSuccess, onError) => {
  const fetchSuperAdmins = ()=>{
    // return axios.get('http://localhost:4000/superAdmin')
    return request({url:'/superAdmin'})
  }

  return (
    useQuery('super-admins', fetchSuperAdmins,{
      //cacheTime:5000, staleTime:30000
      //refetchOnMount:true, refetchOnWindowFocus:true,
      //refetchInterval:2000, refetchIntervalInBackground:true,
      //enabled:false
      onSuccess, onError,
      // select:(data)=>{
        //  const superAdminNames=data.data.map(item=>item.name)
        //  return superAdminNames
        // }
      })
      )
    }
    
const addSuperAdmin = (admin) => {
  // return axios.post('http://localhost:4000/superAdmin', admin)
  return request({url:'/superAdmin', method:'post', data: admin})
  }
export const useAddSuperAdminData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperAdmin, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries('super-admins');
      queryClient.invalidateQueries('super-admins', (oldQueryData)=>{
        return {
          ...oldQueryData, data: [...oldQueryData, data.data],
        }
      });

    }
  })
}
export default useSuperAdminsData