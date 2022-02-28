import { ThemeProvider, Typography } from "@mui/material";
import theme from "../../src/theme";
import Head from "next/head";
import Bar from "./Bar";

const Layout = ({ children }: any) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<Bar />
				{children}
			</ThemeProvider>
		</>
	);
};

export default Layout;
