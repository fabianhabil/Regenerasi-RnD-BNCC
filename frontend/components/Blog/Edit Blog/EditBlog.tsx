import {
	ThemeProvider,
	Grid,
	Typography,
	Button,
	InputBase,
} from "@mui/material";
import theme from "../../../src/theme";
import { useStyles } from "./BlogStyles";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import BerhasilPop from "../../Popup/BerhasilPop";
import GagalPop from "../../Popup/GagalPop";
import { useRouter } from "next/router";

const Blog = () => {
	const router = useRouter();
	const pid = router.query.id;

	const styles = useStyles();
	const [blogs, setBlogs] = useState({
		title: "",
		description: "",
		content: "",
	});

	useEffect(() => {
		getBlogs();
	}, []);

	const getBlogs = async () => {
		await axios
			.get(`http://localhost:5000/blogs/${pid}`)
			.then((res) => {
				if (res.data) {
					setBlogs({
						...blogs,
						title: res.data.title,
						description: res.data.description,
						content: res.data.content,
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	console.log(blogs);

	const editBlog = async () => {
		if (
			blogs.title === "" ||
			blogs.description === "" ||
			blogs.content === ""
		) {
			const gaLengkap = "Blog masih tidak lengkap!";
			GagalPop(gaLengkap);
		} else {
			await axios
				.put(`http://localhost:5000/blogs/${pid}`, {
					title: blogs.title,
					description: blogs.description,
					content: blogs.content,
				})
				.then((res) => {
					console.log(res);
					const pop = "Blog berhasil diedit!";
					BerhasilPop(pop);
					router.push("/blog");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
					className={styles.body}
				>
					<Grid
						container
						spacing={3}
						direction="column"
						alignItems="center"
						justifyContent="center"
					>
						<Grid item className={styles.form} xs={12} md={12}>
							<Grid container direction="column" spacing={1}>
								<Grid item>
									<Typography
										sx={{
											fontWeight: 400,
											fontSize: "24px",
											lineHeight: "29px",
										}}
									>
										Title{" "}
										<span style={{ fontSize: "16px", color: "#C4C4C4" }}>
											(max. 60 character)
										</span>
									</Typography>
								</Grid>
								<Grid item>
									<InputBase
										className={styles.formisi}
										fullWidth
										multiline
										onChange={(e: any) => {
											setBlogs({ ...blogs, title: e.target.value });
										}}
										defaultValue={blogs.title}
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item className={styles.form} xs={12} md={12}>
							<Grid container direction="column" spacing={1}>
								<Grid item>
									<Typography
										sx={{
											fontWeight: 400,
											fontSize: "24px",
											lineHeight: "29px",
										}}
									>
										Description{" "}
										<span style={{ fontSize: "16px", color: "#C4C4C4" }}>
											(max. 255 character)
										</span>
									</Typography>
								</Grid>
								<Grid item>
									<InputBase
										className={styles.formisi}
										fullWidth
										multiline
										onChange={(e: any) => {
											setBlogs({ ...blogs, description: e.target.value });
										}}
										defaultValue={blogs.description}
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item className={styles.form} xs={12} md={12}>
							<Grid container direction="column" spacing={1}>
								<Grid item>
									<Typography
										sx={{
											fontWeight: 400,
											fontSize: "24px",
											lineHeight: "29px",
										}}
									>
										Content{" "}
										<span style={{ fontSize: "16px", color: "#C4C4C4" }}>
											(max. 50000 character)
										</span>
									</Typography>
								</Grid>
								<Grid item>
									<InputBase
										className={styles.formisiContent}
										fullWidth
										multiline
										onChange={(e: any) => {
											setBlogs({ ...blogs, content: e.target.value });
										}}
										defaultValue={blogs.content}
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={12} xs={12}>
							<Grid
								container
								direction="row"
								justifyContent="space-between"
								alignItems="center"
							>
								<Grid
									item
									sx={{
										maxWidth: "100%",
										padding: 0,
										margin: 0,
										marginRight: "20px",
									}}
								>
									<Link href="/blog">
										<Button className={styles.button}>
											<Typography>Cancel</Typography>
										</Button>
									</Link>
								</Grid>
								<Grid
									item
									sx={{
										maxWidth: "100%",
										padding: 0,
										margin: 0,
									}}
								>
									<Button className={styles.button} onClick={editBlog}>
										<Typography>Post</Typography>
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</ThemeProvider>
		</>
	);
};

export default Blog;
