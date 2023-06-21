import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { classes } from "../../components/LogonStyle";

const Form = () => {
	return (
		<Box component="div" sx={classes.LogBlk}>
			<Box component="div" sx={classes.fromWrapper}>
				<Typography variant="h2" sx={classes.formTitle}>
					Sign In
				</Typography>
				<Typography component="p" sx={classes.subTitle}>
					Hello James welcome back to your dashboard.
				</Typography>
				<TextField
					sx={classes.logonTextField}
					id="outlined-basic"
					variant="outlined"
					fullWidth
					placeholder="Enter your Email Address"
				/>
			</Box>
		</Box>
	);
};

export default Form;
