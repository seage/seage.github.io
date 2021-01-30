import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import SeageLogo from '../images/seage-logo.svg';

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid container spacing={6} justify="center" alignItems="center">
        <Grid item>
          {/* <img src="https://raw.githubusercontent.com/seage/web/gh-pages/images/logo.png" alt="logo" /> */}
          <img src={SeageLogo} alt="logo" width="180"/>
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
            SEAGE
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        SEAGE is a hyper-heuristic framework for collaboration of metaheuristic algorithms.
      </Typography>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary" href="https://github.com/seage/seage" target="_blank">
              <GitHubIcon className={classes.icon} /> Go to GitHub
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="#basics">
              Learn more
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Intro;