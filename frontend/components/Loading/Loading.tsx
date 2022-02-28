import React, { useState } from "react";
import { Hidden, Grid } from "@mui/material";
import Head from "next/head";
import Layout from "../Layout/Layout";
import { useStyles } from "../Layout/LayoutStyles";
function Loading() {
	const styles = useStyles();
	return (
		<>
			<Head>
				<title>Blogskuy</title>
			</Head>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				className={styles.appbar}
			>
				<img src="/loading.svg" style={{ width: 300, height: 300 }} />
			</Grid>
		</>
	);
}

Loading.getLayout = function getLayout(page: any) {
	return (
		<>
			<Layout>{page}</Layout>
		</>
	);
};

export default Loading;
