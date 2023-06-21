import { Box } from "@mui/material";
import React from "react";
import { classes } from "./LogonStyle";
import LogonBackground from "../assets/images/logonSidebar.jpg";

const LogonSide = () => {
	return (
		<Box
			component="div"
			sx={classes.logonSidebar}
			style={{ backgroundImage: "url(" + LogonBackground + ")" }}
		></Box>
	);
};

export default LogonSide;
