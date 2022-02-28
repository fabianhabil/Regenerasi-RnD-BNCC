import Layout from "../../components/Layout/Layout";
import { ThemeProvider, Grid, Typography } from "@mui/material";
import theme from "../../src/theme";
import Head from "next/head";
import Blog from "../../components/Blog/Blog";

const Index = () => {
	return (
		<>
			<Head>
				<title>Blogskuy | Blog</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Blog />
			</ThemeProvider>
		</>
	);
};

Index.getLayout = function getLayout(page: any) {
	return <Layout>{page}</Layout>;
};

export default Index;
