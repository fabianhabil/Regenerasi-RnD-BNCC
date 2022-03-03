import { makeStyles } from "@mui/styles";
import theme from "../../../src/theme";

const useStyles = makeStyles((theme: any) => ({
	body: {
		paddingRight: "96px",
		paddingLeft: "96px",
		paddingTop: "40px",
		paddingBottom: "40px",
		height: "60vh",
		[theme.breakpoints.down("md")]: {
			marginTop: "auto",
			paddingRight: "16px",
			paddingLeft: "16px",
			paddingTop: "8px",
			// marginLeft: "auto",
			// marginRight: "auto",
			paddingBottom: "8px",
		},
	},
	judul: {
		fontWeight: 400,
		lineHeight: "145px",
		fontSize: "120px",
	},
	button: {
		backgroundColor: "black",
		textTransform: "none",
		color: "white",
		width: "16.5vw",
		height: "40px",
		fontWeight: "700",
		"&:hover": {
			color: "white",
			backgroundColor: "#4d4d4d",
		},

		[theme.breakpoints.down("md")]: {
			width: "30vw",
		},
		// [theme.breakpoints.down("md")]: {
		// 	width: "15vh",
		// },
	},
	post: {
		backgroundColor: "#C4C4C4",
		padding: "32px",
		minWidth: "100%",
		minHeight: "100%",
		wordWrap: "break-word",
	},
	form: {
		minWidth: "70vh",
		width: "70vh",
		[theme.breakpoints.down("md")]: {
			minWidth: "75%",
			width: "75%",
		},
	},
	formisi: {
		backgroundColor: "#C4C4C4",
		borderRadius: "10px",
		minHeight: "60px",
		padding: "16px",
		// border: 0,
	},
	formisiContent: {
		backgroundColor: "#C4C4C4",
		borderRadius: "10px",
		minHeight: "100px",
		padding: "16px",
		// border: 0,
	},
}));

export { useStyles };
