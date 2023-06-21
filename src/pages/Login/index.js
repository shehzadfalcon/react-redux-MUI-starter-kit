import { Box } from "@mui/material";
import LogonSidebar from "../../components/LogonSidebar";
import Form from "./Form";
import { classes } from "../../components/LogonStyle";

const Login = () => {
	return (
		<Box component="section" sx={classes.Logon}>
			<Form />
			<LogonSidebar />
		</Box>
	);
};

export default Login;
