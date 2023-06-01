import { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import HeaderPage from './components/HeaderPage';
const SuperAdminPage = lazy(()=> import("./components/SuperAdminPage"))
const RqSuperAdminsPage =lazy(()=> import("./components/RqSuperAdminsPage"))
const RqSuperAdminPage = lazy(()=> import("./components/RqSuperAdminPage"))
const HomePage = lazy(()=> import("./components/HomePage")) 
const RqParallelQuriesPage = lazy(()=>import("./components/parallelQuriesPage"))
const RqDynamicParallelPage = lazy(()=>import("./components/DynamicParallelPage"))
const RqDependentPage = lazy(()=> import("./components/RqDependentQuriesPage"))
const RqPaginatedQuriesPage = lazy(()=> import("./components/paginatedQuriesPage"))
const RqInfiniteQuriesPage = lazy(()=> import("./components/RqInfiniteQuriesPage"))
const App = () => {
  return (
    <div className="App"> 
    <HeaderPage />
        <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/super-admin" element={<SuperAdminPage />} />
          <Route exact path="/rq-super-admin" element={<RqSuperAdminsPage />} />
          <Route exact path="/rq-super-admin/:adminId" element={<RqSuperAdminPage />} />
          <Route exact path="/rq-parallel" element={<RqParallelQuriesPage />} />
          <Route exact path="/rq-dynamic-parallel" element={<RqDynamicParallelPage adminIds={[1,3]} />} />
          <Route exact path="/rq-dependent" element={<RqDependentPage email="imtiyaz@gmail.com" />} />
          <Route exact path="/rq-pagination" element={<RqPaginatedQuriesPage />} />
          <Route exact path="/rq-infinite" element={<RqInfiniteQuriesPage />} />
        </Routes>
        </Suspense>
    </div>
  );
}

export default App;
