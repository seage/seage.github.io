import { Container, Link, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const SectionPublications = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography component="h2" variant="h3" align="center" color="primary" gutterBottom>
          Publications
          </Typography>
        <div>
          <Typography variant="h6" align="left" color="textSecondary" paragraph>2011</Typography>
          <ul>
            <li>
              <Typography variant="h6" align="justify" color="textSecondary" paragraph>
                Durkota, K. - Malek, R: <b>Implementation of a Discrete Firefly Algorithm Within the SEAGE Framework.</b> Bachelor thesis. Prague: Czech Technical University in Prague, 2011.<br />
              </Typography>
              <Link href="https://www.researchgate.net/publication/276281855_Implementation_of_a_Discrete_Firefly_Algorithm_for_the_QAP_Problem_within_the_SEAGE_Framework">[ResearchGate]</Link>
            </li>
          </ul>

          <Typography variant="h6" align="left" color="textSecondary" paragraph>2010</Typography>
          <ul>
            <li>
              <Typography variant="h6" align="justify" color="textSecondary" paragraph>
                Malek, R.: <b>An Agent-Based Hyper-Heuristic Approach to Combinatorial Optimization Problems.</b> In Proceedings of 2010 IEEE International Conference on Intelligent Computing and Intelligent Systems. New York: IEEE Press, 2010, vol. 3, p. 428-434. ISBN 978-1-4244-6583-5.
                </Typography>
              <Link href="data/malek10hyper.pdf">[PDF]</Link>
              <Link href="data/malek10hyper.bib">[BibTeX]</Link>
            </li>
          </ul>

          <Typography variant="h6" align="left" color="textSecondary" paragraph>2009</Typography>
          <ul>
            <li>
              <Typography variant="h6" align="justify" color="textSecondary" paragraph>
                Malek, R.: <b>Collaboration of Metaheuristic Algorithms through a Multi-Agent System.</b> In Holonic and Multi-Agent Systems for Manufacturing - HoloMAS 2009. Heidelberg: Springer, 2009, p. 72-81. ISBN 978-3-642-03666-8.
                </Typography>
              <Link href="data/malek09col.pdf">[PDF]</Link>
              <Link href="data/malek09col.bib">[BibTeX]</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Typography variant="h6" align="justify" color="textSecondary" paragraph>
                Malek, R.: <b>Global Optimization through Meta-Heuristic Collaboration in a Multi-Agent System.</b> Specialised study. Prague: Czech Technical University in Prague, 2009.
                </Typography>
              <Link href="data/malek09specstudy.pdf">[PDF]</Link>
            </li>
          </ul>

          <Typography variant="h6" align="left" color="textSecondary" paragraph>2007</Typography>
          <ul>
            <li>
              <Typography variant="h6" align="justify" color="textSecondary" paragraph>
                Malek, R.: <b>Alternation of Meta-heuristic Algorithms with Runtime Analysis and Parameter Adaptation</b> Diploma thesis. Prague: Czech Technical University in Prague, 2007.
                </Typography>
              <Link href="data/malek07thesis.pdf">[PDF]</Link>
              <Link href="data/malek07thesis.bib">[BibTeX]</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default SectionPublications;