import { makeStyles } from "@mui/styles";
import theme from "../../src/theme";

const useStyles = makeStyles((theme: any) => ({
	body: {
		paddingRight: "96px",
		paddingLeft: "96px",
		paddingTop: "40px",
		paddingBottom: "40px",
		[theme.breakpoints.down("md")]: {
			paddingRight: "16px",
			paddingLeft: "16px",
			paddingTop: "8px",
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
		width: "250px",
		height: "40px",
		fontWeight: "700",
		"&:hover": {
			color: "white",
			backgroundColor: "#4d4d4d",
		},
	},
	post: {
		backgroundColor: "#C4C4C4",
		padding: "32px",
		width: "100%",
		height: "100%",
		wordBreak: "break-all",
		wordWrap: "break-word",
	},
}));

export { useStyles };
