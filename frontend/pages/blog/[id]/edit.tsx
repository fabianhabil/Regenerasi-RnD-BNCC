import Layout from "../../../components/Layout/Layout";
import { ThemeProvider } from "@mui/material";
import theme from "../../../src/theme";
import Head from "next/head";
import { useRouter } from "next/router";
import Blog from "../../../components/Blog/Edit Blog/EditBlog";

const Edit = () => {
	const router = useRouter();
	const pid = router.query.id;
	return (
		<>
			<Head>
				<title>Blogskuy | Edit</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Blog />
			</ThemeProvider>
		</>
	);
};

Edit.getLayout = function getLayout(page: any) {
	return <Layout>{page}</Layout>;
};

export default Edit;
