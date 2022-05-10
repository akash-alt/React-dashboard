import React from 'react';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from './pages/single/Single';
import List from "./pages/list/List";
import Users from './pages/users/Users';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          {/**<Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/users' element={<Users />} />
          <Route exact path='users/list' element={<List />} />
          <Route exact path='users/:userId' element={<Single />} />
          <Route exact path='users/new' element={<New />} />  */}

          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productsId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App