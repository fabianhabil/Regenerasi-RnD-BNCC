import { makeStyles } from "@mui/styles";
import theme from "../../src/theme";

const useStyles = makeStyles((theme: any) => ({
	appbar: {
		paddingRight: "96px",
		paddingLeft: "96px",
		paddingTop: "40px",
		paddingBottom: "40px",
		backgroundColor: "white",
		[theme.breakpoints.down("md")]: {
			paddingRight: "16px",
			paddingLeft: "16px",
			paddingTop: "24px",
			paddingBottom: "24px",
		},
	},
	blogskuy: {
		cursor: "pointer",
		color: "#000000",
		fontSize: "32px",
	},
	blog: {
		cursor: "pointer",
		color: "#C4C4C4",
		fontSize: "18px",
	},
	button: {
		backgroundColor: "#FFB800",
		textTransform: "none",
		width: "100px",
		height: "40px",
		boxSizing: "border-box",
		borderRadius: "10px",
		"&:hover": {
			backgroundColor: "#FFD466",
		},
	},
}));

export { useStyles };
