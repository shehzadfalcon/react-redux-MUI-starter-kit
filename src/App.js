import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AllRoutes } from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./routes/PrivateRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				{/* <nav>
        <Link to="/">Public</Link>
        {" | "}
        <Link to="/dashboard">Dashboard</Link>
      </nav> */}
				<Routes>
					{AllRoutes?.map((item, index) => (
						<Route
							key={index}
							path={item.path}
							element={
								item.isPrivate ? (
									<PrivateRoute>{item.page}</PrivateRoute>
								) : (
									<ProtectedRoute>{item.page}</ProtectedRoute>
								)
							}
						></Route>
					))}
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
