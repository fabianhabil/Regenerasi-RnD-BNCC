import { makeStyles } from "@mui/styles";
import theme from "../../src/theme";

const useStyles = makeStyles((theme: any) => ({
	body: {
		paddingRight: "96px",
		paddingLeft: "96px",
		paddingTop: "40px",
		paddingBottom: "40px",
		height: "86vh",
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
}));

export { useStyles };
