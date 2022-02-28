import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
	appbar: {
		paddingRight: "80px",
		paddingLeft: "80px",
		paddingTop: "24px",
		paddingBottom: "24px",
		backgroundColor: "white",
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
