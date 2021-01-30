import { Container, makeStyles, Typography } from "@material-ui/core";

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
      <Typography variant="h5" align="justify" color="textSecondary" paragraph>
        <b>Optimization</b> problems are <b>hard</b> because of their vast <b>state space</b>. 
        The state space is <b>so big</b> that examining every single element could take <b>centuries</b>.
      </Typography>
      <Typography variant="h5" align="justify" color="textSecondary" paragraph>  
        <b>Heuristics</b> introduce <b>problem specific</b> hints to tackle the vast state space and promise finding
        a <b>good</b> solution in a <b>reasonable</b> time.
      </Typography>
      <Typography variant="h5" align="justify" color="textSecondary" paragraph>  
        <b>Metaheuristics</b> (often nature inspired like Genetic Algorithm, Ant Colony Optimization, etc.) 
        overcome the barrier of being problem specific and provide good solutions <b>across</b> certain <b>problem domains</b>.
        The <b>solutions</b> provided by metaheuristics are <b>good</b> but can be even <b>better</b>?
      </Typography>
      <Typography variant="h5" align="justify" color="textSecondary" paragraph>  
        <b>Hyper-heuristics</b> try to combine (meta)heuristics based on the problem to be solved and automatically discover best
        strategies most suitable for a given problem.
      </Typography>
      <Typography variant="h5" align="justify" color="textSecondary" paragraph>
        <b>SEAGE</b> is such hyper-heuristic framework for collaboration of metaheuristic algorithms.
        SEAGE allows to <b>perform</b> various <b>experiments</b>, <b>collect data</b> from the experiments and <b>evaluate</b> them.
        Based on this <b>feedback</b> the <b>new</b> hyper-heuristic <b>strategies</b> can be developed.
      </Typography>
    </Container>
  );
};

export default SectionHyperheuristics;