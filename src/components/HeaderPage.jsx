import React from "react";
import {Link} from "react-router-dom"
const HeaderPage = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-admin">Traditional Super Admin</Link>
          </li>
          <li>
            <Link to="/rq-super-admin">Rq Super Admin</Link>
          </li>
          <li>
            <Link to="/rq-parallel">Rq Parallel</Link>
          </li>
          <li>
            <Link to="/rq-dynamic-parallel">Rq Dynamic Parallel</Link>
          </li>
          <li>
            <Link to="/rq-dependent">Rq Dependent</Link>
          </li>
          <li>
            <Link to="/rq-pagination">Rq Pagination</Link>
          </li>
          <li>
            <Link to="/rq-infinite">Rq Infinite</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderPage;
