import { UserContext } from "./component/context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ component: Component }) => {

	const { user } = useContext(UserContext);
	
	if (user) return <Component />;
	return <Navigate to="/" />;
};

export default PrivateRoutes;
