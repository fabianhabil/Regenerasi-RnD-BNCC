import { Paper, Grid } from "@mui/material";

const LoadingComponent = () => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{ marginTop: "8px", marginBottom: "8px", width: "100%" }}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "50%" }}
        >
          <img src="/loading.svg" />
        </Grid>
      </Paper>
    </>
  );
};

export default LoadingComponent;
