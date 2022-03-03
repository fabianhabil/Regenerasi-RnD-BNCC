import Layout from "../../../components/Layout/Layout";
import { ThemeProvider } from "@mui/material";
import theme from "../../../src/theme";
import Head from "next/head";
import { useRouter } from "next/router";
import BlogsPost from "../../../components/Blog/Blog Post/BlogsPost";

const Index = () => {
	const router = useRouter();
	const pid = router.query.id;
	return (
		<>
			<Head>
				<title>Blogskuy | Blog</title>
			</Head>
			<ThemeProvider theme={theme}>
				<BlogsPost />
			</ThemeProvider>
		</>
	);
};

Index.getLayout = function getLayout(page: any) {
	return <Layout>{page}</Layout>;
};

export default Index;
