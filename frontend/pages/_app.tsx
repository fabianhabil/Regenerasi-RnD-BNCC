import { AppProps } from "next/app";
import React, { useState } from "react";
import { NextPage } from "next";
import { ReactNode } from "react";
import Router from "next/router";
import Loading from "../components/Loading/Loading";
import CssBaseline from "@mui/material/CssBaseline";

type Page<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
	Component: Page;
};

const MyApp = ({ Component, pageProps }: Props) => {
	const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
	const [loading, setLoading] = useState(false);
	Router.events.on("routeChangeStart", (url) => {
		// console.log("router ganti");
		setLoading(true);
	});
	Router.events.on("routeChangeComplete", (url) => {
		// console.log("router beres");
		setLoading(false);
	});
	return getLayout(
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<CssBaseline />
					<Component {...pageProps} />
				</>
			)}
		</>
	);
};
export default MyApp;
