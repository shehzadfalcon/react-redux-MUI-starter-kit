import React from "react";
import { signInAsync } from "../store/reducers/auth.reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loginHandler = () => {
		dispatch(signInAsync()).then(() => {
			navigate("/dashboard");
		});
	};

	return (
		<>
			<Typography variant="h1">Hello</Typography>
			<div>login</div>
			<button onClick={loginHandler}>Login</button>
		</>
	);
};

export default Login;
