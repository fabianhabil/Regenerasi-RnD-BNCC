import { ThemeProvider, Grid, Hidden, Typography, Button } from "@mui/material";
import theme from "../../src/theme";
import { useStyles } from "./BlogStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import data from "./SampleData";
import React from "react";
import Link from "next/link";

const Blog = () => {
	const styles = useStyles();
	return (
		<>
			<ThemeProvider theme={theme}>
				<Grid
					container
					className={styles.body}
					direction="column"
					justifyContent="center"
					spacing={4}
				>
					<Grid item md={12} xs={12}>
						<Grid container alignItems="center" justifyContent="center">
							<Link href="/blog/new">
								<Button className={styles.button}>Create My Own Blog</Button>
							</Link>
						</Grid>
					</Grid>
					<Grid item md={12} xs={12}>
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="stretch"
							spacing={2}
						>
							{data.map((article, index): any => {
								return (
									<React.Fragment key={index}>
										<Grid item xs={12} md={6}>
											<Grid
												container
												className={styles.post}
												direction="row"
												alignItems="flex-start"
												justifyContent="center"
											>
												<Grid item xs={12}>
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
																		sx={{ fontSize: "18px", color: "#737373" }}
																	>
																		{article.time}
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
															{article.judul}
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
												<Grid item xs={12}>
													<Grid
														container
														alignItems="center"
														justifyContent="center"
														sx={{ marginTop: 4 }}
													>
														<Button className={styles.button} fullWidth>
															See More
														</Button>
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
