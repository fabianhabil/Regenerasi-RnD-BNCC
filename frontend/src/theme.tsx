import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#14161C",
		},
		secondary: {
			main: "#1A1A2E",
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: [
			"Inter",
			"Montserrat",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

export default theme;
