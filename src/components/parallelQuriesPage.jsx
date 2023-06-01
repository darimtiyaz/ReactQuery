import {useQuery} from "react-query"
import axios from 'axios'

const fetchSuperAdmins = () => {
  return axios.get('https://localhost:4000/superAdmins');
}

const fetchFriends = () => {
  return axios.get('https://localhost:4000/friends');
}

const ParallelQuriesPage = () => {
  const {data:superAdmins}=useQuery('super-admins', fetchSuperAdmins);
  const {data:friends}=useQuery('friends', fetchFriends);

  return <div>ParallelQuriesPage</div>
}

export default ParallelQuriesPage;