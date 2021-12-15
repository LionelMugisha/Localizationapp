import { Route,Routes } from 'react-router-dom';
import Login from './component/pages/Login';
import Register from './component/pages/Register';
import NotFound from './component/pages/NotFound';
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';
import { UserContext } from "./component/context/UserContext";
import { useContext } from "react";
import PrivateRoutes from './PrivateRoute'

const App = () => {
	const { user } = useContext(UserContext);

  return(
    <>
        <div className="max-w-7xl mx-auto rounded-sm mt-1 ml-92">
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Dashboard /> : <Login />} />
            <Route
              path="/Register"
              element={user ? <Dashboard /> : <Register />}
              />
            <Route
              path="/Dashboard"
              element={<PrivateRoutes component={Dashboard} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </>
  )
}

export default App;
