import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

// const fetchAdmin = (adminId)=>{
//   return axios.get(`http://localhost:4000/superAdmin/${adminId}`)
// }
// const useAdminData = (adminId) => {
//   return (
//    useQuery(['super-admin',adminId],()=> fetchAdmin(adminId))
//   )
// }

const fetchAdmin = ({queryKey})=>{
  const adminId=queryKey[1]
  return axios.get(`http://localhost:4000/superAdmin/${adminId}`)
}
const useAdminData = (adminId) => {
  const queryClient=useQueryClient();
  return (
   useQuery(['super-admin',adminId],()=> fetchAdmin, {
    initialData: () => {
      const admin = queryClient.getQueryData('super-admins')?.data?.find((admin)=>
      admin.id===parseInt(adminId))
      if(admin){
        return { data: admin}
      }else{
        return undefined
      }
    }
   })
  )
}

export default useAdminData;
