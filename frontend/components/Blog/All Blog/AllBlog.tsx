import {
	ThemeProvider,
	Grid,
	Hidden,
	Typography,
	Button,
	Card,
	CardContent,
} from "@mui/material";
import theme from "../../../src/theme";
import { useStyles } from "./BlogStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Blog = () => {
	const styles = useStyles();
	const [blogs, setBlogs] = useState<any[]>([]);

	const getBlog = async () => {
		await axios
			.get("http://localhost:5000/blogs")
			.then((res) => {
				console.log(res.data);
				setBlogs(res.data);
			})
			.catch((err) => {});
	};
	useEffect(() => {
		getBlog();
		if (blogs) {
			console.log(blogs.length);
		}
	}, []);

	const numDaysBetween = function (d1: any) {
		var hariini = new Date().getTime();
		var today = hariini / 1000;
		var diff = Math.abs(d1 - today);
		return Math.trunc(diff / (60 * 60 * 24));
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<Grid
					container
					className={styles.body}
					// direction="column"
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					<Grid item md={12} xs={12} sx={{ marginBottom: 3 }}>
						<Grid container alignItems="center" justifyContent="center">
							<Link href="/blog/new">
								<Button className={styles.button}>Create My Own Blog</Button>
							</Link>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container spacing={2}>
							{blogs.map((article, index): any => {
								return (
									<React.Fragment key={index}>
										<Grid item xs={12} md={blogs.length === 1 ? 12 : 6}>
											<Grid
												container
												className={styles.post}
												direction="column"
												// alignItems="flex-start"
												justifyContent="space-between"
											>
												<CardContent>
													<Grid item>
														<Grid
															container
															direction="row"
															alignItems="center"
															spacing={2}
															sx={{ height: "100%" }}
														>
															<Grid item>
																<AccountCircleIcon
																	sx={{
																		fontSize: "40px",
																		color: "black",
																		verticalAlign: "middle",
																	}}
																/>
															</Grid>
															<Grid item>
																<Grid container direction="column" spacing={0}>
																	<Grid item>
																		<Typography sx={{ fontSize: "32px" }}>
																			{article.author}
																		</Typography>
																	</Grid>
																	<Grid item>
																		<Typography
																			sx={{
																				fontSize: "18px",
																				color: "#737373",
																			}}
																		>
																			{numDaysBetween(article.createdAt) ==
																				0 && <>Today</>}
																			{numDaysBetween(article.createdAt) !=
																				0 && (
																				<>
																					{numDaysBetween(article.createdAt)}d
																					ago
																				</>
																			)}
																		</Typography>
																	</Grid>
																</Grid>
															</Grid>
														</Grid>
													</Grid>
													<Grid item xs={12}>
														<Grid
															container
															alignItems="center"
															justifyContent="center"
															sx={{
																marginTop: 4,
																minHeight: "100%",
																width: "100%",
															}}
														>
															<Typography
																sx={{
																	fontSize: "32px",
																	fontWeight: "bold",
																	textAlign: "center",
																}}
															>
																{article.title}
															</Typography>
														</Grid>
													</Grid>
													<Grid item xs={12}>
														<Typography
															sx={{
																fontSize: "32px",
																color: "white",
																marginTop: 2,
															}}
														>
															{article.content.length > 100 && (
																<>
																	{article.content.substring(0, 100) + " ....."}
																</>
															)}
															{article.content.length < 100 && (
																<>{article.content}</>
															)}
														</Typography>
													</Grid>
												</CardContent>
												<Grid item xs={12}>
													<Grid
														container
														alignItems="center"
														justifyContent="center"
														sx={{ marginTop: 4 }}
													>
														<Link href={`/blog/${article.id}`}>
															<Button className={styles.button} fullWidth>
																See More
															</Button>
														</Link>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</React.Fragment>
								);
							})}
						</Grid>
					</Grid>
				</Grid>
			</ThemeProvider>
		</>
	);
};

export default Blog;
