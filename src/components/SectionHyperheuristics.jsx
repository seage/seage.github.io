import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const SectionHyperheuristics = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography component="h2" variant="h3" align="center" color="primary" gutterBottom>
        Hyper-heuristics
            </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        SEAGE is a hyper-heuristic framework for collaboration of metaheuristic algorithms.
            </Typography>
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item>

          </Grid>
          <Grid item>

          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default SectionHyperheuristics;