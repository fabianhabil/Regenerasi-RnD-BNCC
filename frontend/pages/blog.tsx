import Layout from "../components/Layout/Layout";

const Blog = () => {
	return <>test</>;
};

Blog.getLayout = function getLayout(page: any) {
	return <Layout>{page}</Layout>;
};

export default Blog;
