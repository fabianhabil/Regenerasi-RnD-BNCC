import {
	ThemeProvider,
	Typography,
	AppBar,
	Button,
	Slide,
	Container,
	useScrollTrigger,
	Grid,
	Hidden,
} from "@mui/material";
import theme from "../../src/theme";
import Link from "next/link";
import { useStyles } from "./LayoutStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HideOnScroll(props: any) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

const Bar = (props: any) => {
	const styles = useStyles();
	return (
		<>
			<ThemeProvider theme={theme}>
				<HideOnScroll {...props}>
					<AppBar position="sticky" elevation={0} className={styles.appbar}>
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Grid item>
								<Grid
									container
									alignItems="center"
									justifyContent="center"
									spacing={2}
								>
									<Link href="/">
										<Grid item>
											<Typography className={styles.blogskuy}>
												Blog<span style={{ color: "#FFB800" }}>Skuy</span>
											</Typography>
										</Grid>
									</Link>
									<Link href="/blog">
										<Grid item>
											<Typography className={styles.blog}>Blog</Typography>
										</Grid>
									</Link>
								</Grid>
							</Grid>
							<Grid item>
								<Grid
									container
									alignItems="center"
									justifyContent="center"
									spacing={2}
								>
									<Link href="/login">
										<Grid item>
											<Button className={styles.button}>
												<Typography>Login</Typography>
											</Button>
										</Grid>
									</Link>
									{/* Profile! */}
									{/* <Grid item>
										<AccountCircleIcon
											sx={{
												fontSize: "40px",
												color: "black",
												verticalAlign: "middle",
											}}
										/>
									</Grid> */}
								</Grid>
							</Grid>
						</Grid>
					</AppBar>
				</HideOnScroll>
			</ThemeProvider>
		</>
	);
};

export default Bar;
