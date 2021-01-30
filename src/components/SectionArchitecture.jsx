import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import architecture from '../images/architecture.svg';

const useStyles = makeStyles((theme) => ({
  arch: {
    // paddingTop: theme.spacing(1)
  },
  image: {
    // backgroundColor: 'red',
    maxWidth: '100%',
    paddingTop: theme.spacing(1)
  }
}));

const SectionArchitecture = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md">
        <Typography component="h2" variant="h3" align="center" color="primary" gutterBottom>
          Architecture
        </Typography>
        <Grid container spacing={10} className={classes.arch}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h5" align="justify" color="textSecondary" paragraph>
              The SEAGE's <b>architecture</b> can be seen as <b>a set of layers</b>.
                The upper layer uses the one bellow.
                The lower layer is not aware of the one above. See <b>the picture</b> on the right.
              </Typography>
            <Typography variant="h5" align="justify" color="textSecondary" paragraph>
              One of the layers is the <b>Algorithm Abstraction Layer</b> (AAL)
                which allows to run algorithms in <b>one uniform way</b>.
              </Typography>
            <Typography variant="h5" align="justify" color="textSecondary" paragraph>
              Running an <b>algorithm on a problem</b> is seen as an <b>experiment</b>.
                Defining and <b>evaluating</b> the experiments is the most funny part of this projects
                and leads to <b>hyper-heuristics</b>.
              </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
              <div className={classes.image}>
                <img src={architecture} alt="architecture" align="right" className={classes.image}/>
              </div>
              
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SectionArchitecture;