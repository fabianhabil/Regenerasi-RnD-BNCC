import Head from "next/head";
import Link from "next/link";
import { ThemeProvider, Grid, Container } from "@mui/material";
import theme from "../src/theme";
import Layout from "../components/Layout/Layout";
import Landing from "../components/Home/Home";

const Home = () => {
	return (
		<>
			<Head>
				<title>Blogskuy | Home</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Landing />
			</ThemeProvider>
		</>
	);
};

Home.getLayout = function getLayout(page: any) {
	return <Layout>{page}</Layout>;
};

export default Home;
