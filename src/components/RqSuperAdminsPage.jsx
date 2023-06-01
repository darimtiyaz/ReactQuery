import React, {useState} from 'react'
import { useMutation, useQuery } from 'react-query'
import axios from 'axios'
import useSuperAdminsData, { useAddSuperAdminData } from '../hooks/useSuperAdminsData';
import { Link } from 'react-router-dom';

// const useAdminSuperData = () => {
//   return useMutation(addSuperAdmin)
// }
const RqSuperAdminPage = () => {
  const [name, setName]=useState('');
  const [alterEgo, setAlterEgo] = useState('');
  const onSuccess=(data)=>{console.log("perform sideeffect after datafetching ", data)};
  const onError=(error)=>{console.log("perform sideeffect after encountering error ", error)};
  const {isLoading, data, isError, error, isFetching, refetch} = useSuperAdminsData(onSuccess, onError);
  console.log({isLoading, isFetching});
  const {mutate: addAdmin} = useAddSuperAdminData();
  const handleAddAdminClick = () => {
     const admin = {name, alterEgo};
     addAdmin(admin);
     setName('');
     setAlterEgo('');
  }
  if(isLoading || isFetching){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <div className='container'>
      <h1>RqSuperAdminPage</h1>
      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="text" name="alterEgo" value={alterEgo} onChange={(e)=>setAlterEgo(e.target.value)}/>
      <button onClick={handleAddAdminClick}>Add Admin</button><br/>

      <button onClick={refetch}>Fetch admin</button>
      {data?.data.map((item)=>{
        return <div key={item.id}>
        <Link to={`/rq-super-admin/${item.id}`}>{item.name}</Link></div>
      })}
      {/* {data?.map((item)=>{
        return <div key={item}>{item}</div>
      })} */}
    </div>
  )
}

export default RqSuperAdminPage
