import { ThemeProvider, Grid, Hidden, Typography } from "@mui/material";
import theme from "../../src/theme";
import { useStyles } from "./HomeStyles";
import Image from "next/image";

const Landing = () => {
	const styles = useStyles();
	return (
		<>
			<ThemeProvider theme={theme}>
				<Grid
					className={styles.body}
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					<Grid item md={6} xs={12}>
						<Grid
							container
							direction="column"
							justifyContent="center"
							alignItems="flex-start"
							sx={{
								borderLeft: 1,
								borderColor: "#A37500",
								borderWidth: "5px",
								padding: 1,
							}}
						>
							<Grid item>
								<Typography className={styles.judul}>
									no <span style={{ fontWeight: 700 }}>blog</span>
								</Typography>
							</Grid>
							<Grid item>
								<Typography className={styles.judul}>
									no{" "}
									<span style={{ fontWeight: 700, color: "#FFB800" }}>
										skuy
									</span>
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Hidden mdDown>
						<Grid item md={6} xs={0}>
							<Grid
								container
								direction="row-reverse"
								justifyContent="flex-start"
								alignItems="flex-start"
							>
								<Grid item sx={{ minWidth: "90%" }}>
									<Image
										src="/SALY.png"
										width={0}
										height={0}
										layout="responsive" // width={200}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Hidden>
				</Grid>
			</ThemeProvider>
		</>
	);
};

export default Landing;
