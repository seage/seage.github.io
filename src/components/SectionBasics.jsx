import { Container, makeStyles, Typography } from "@material-ui/core";
import FeatureMatrixTable from "./FeatureMatrixTable";

const useStyles = makeStyles((theme) => ({
  tableGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(6),
  },
}));

const SectionBasics = () => {
  const classes = useStyles();
  return (
    <div>
    <Container maxWidth="md">
      <Typography component="h2" variant="h3" align="center" color="primary" gutterBottom >
        Basics
      </Typography>
      <Typography variant="h5" align="justify" color="textSecondary" paragraph>
        The most basic mission of the <b>SEAGE</b> project is being <b>the library</b> of the
        optimization <b>problem and algorithm</b> implementations. They are the heart of the SEAGE project.
        Most of the problems currently implemented are of <b>combinatorial</b> (i.e. discrete) nature.
        The implementation matrix follows.
      </Typography>
      <Typography component="h2" variant="h4" align="center" color="primary">
        Problems and Algorithms
      </Typography>
    </Container>
    <Container className={classes.tableGrid} maxWidth="md">
      <FeatureMatrixTable />
    </Container>
    <Container maxWidth="md">
      <Typography variant="h5" align="justify" color="textSecondary" paragraph>
        Any <b>algorithm</b> can be taken <b>as-is</b> and applied to <b>a new optimization problem</b> simply
        without the need to use any other framework's features.
        The <b>reference problem</b> implementations serve to playing and <b>experimenting</b> with.
      </Typography>
    </Container>
    </div>
  );
};

export default SectionBasics;