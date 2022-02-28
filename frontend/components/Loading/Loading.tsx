import React, { useState } from "react";
import { Hidden, Grid } from "@mui/material";
import Head from "next/head";
import Layout from "../Layout/Layout";
function Loading() {
	return (
		<>
			<Head>
				<title>Regenerasi RnD BNCC</title>
			</Head>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ px: 10, py: 3 }}
			>
				<Grid item>
					<img src="/loading.svg" style={{ width: 300, height: 300 }} />
				</Grid>
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
