import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#2165A2",
			light: "#4BAAFF",
		},
		secondary: {
			main: "#333333",
		},
	},
	typography: {
		h1: {
			fontSize: "4.8rem",
			fontWeight: 600,
		},
		h2: {
			fontSize: "3.6rem",
			fontWeight: 600,
		},
		h3: {
			fontSize: "2.8rem",
			fontWeight: 600,
		},
		h4: {
			fontSize: "2.4rem",
			fontWeight: 600,
		},
		h5: {
			fontSize: "2rem",
			fontWeight: 600,
		},
		h6: {
			fontSize: "1.8rem",
			fontWeight: 600,
		},
	},
});

export default theme;
