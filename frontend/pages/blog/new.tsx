import Layout from "../../components/Layout/Layout";
import Blog from "../../components/Blog/New Blog/NewBlog";
import { ThemeProvider } from "@mui/material";
import theme from "../../src/theme";
import Head from "next/head";

const NewBlog = () => {
	return (
		<>
			<Head>
				<title>Blogskuy | New Blog</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Blog />
			</ThemeProvider>
		</>
	);
};

NewBlog.getLayout = function getLayout(page: any) {
	return <Layout>{page}</Layout>;
};

export default NewBlog;
