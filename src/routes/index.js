import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

export const AllRoutes = [
	{
		path: "/login",
		page: <Login />,
		isPrivate: false,
	},
	{
		path: "/dashboard",
		page: <Dashboard />,
		isPrivate: true,
	},
	{
		path: "/profile",
		page: <Profile />,
		isPrivate: true,
	},
	{
		path: "*",
		page: <NotFound />,
		isPrivate: false,
	},
];
