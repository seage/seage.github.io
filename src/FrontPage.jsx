import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CustomizedTables from './Table';

import AdjustIcon from '@material-ui/icons/Adjust';

import logo from './schema.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        seage.org
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  logoText: {
    color: theme.palette.secondary.main
  },
  logoText2: {
    fontSize: '55%',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    paddingRight: theme.spacing(7),
  },
  linkTarget: {
    paddingTop: '85px',
    // marginTop: '-65px'
  },
  menu: {
    flexGrow: 1,
    textAlign: 'center'
  },
  main: {
    paddingTop: theme.spacing(5)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  tableGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: 'auto',
  },
  arch: {
    paddingTop: theme.spacing(1)
  }
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function FrontPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <AdjustIcon className={classes.icon} color="secondary" />
          <Typography variant="h5" color="inherit" noWrap>
            {/* <a noWrap href="#" >SEarch AGEnts</a> */}
            <Link href="#" color="inherit" underline="none">
              <span className={classes.logoText}>SE</span><span className={classes.logoText2}>ARCH</span>
              <span className={classes.logoText}>AGE</span><span className={classes.logoText2}>NTS</span>
            </Link>
          </Typography>

          <nav className={classes.menu}>
            <Link variant="button" color="inherit" href="#basics" className={classes.link}>
              Basics
            </Link>
            <Link variant="button" color="inherit" href="#architecture" className={classes.link}>
              Architecture
            </Link>
            <Link variant="button" color="inherit" href="#hyper-heuristics" className={classes.link}>
              Hyper-heuristics
            </Link>
            <Link variant="button" color="inherit" href="#publications" className={classes.link}>
              Publications
            </Link>
            <Link variant="button" color="inherit" href="#contacts" className={classes.link}>
              Contacts
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item>
                <img src="https://raw.githubusercontent.com/seage/web/gh-pages/images/logo.png" alt="logo" />
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
        </div>


        <div id="basics" className={classes.linkTarget} />
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
          <CustomizedTables />
        </Container>
        <Container maxWidth="md">
          <Typography variant="h5" align="justify" color="textSecondary" paragraph>
            Any <b>algorithm</b> can be taken <b>as-is</b> and applied to <b>a new optimization problem</b> simply
            without the need to use any other framework's features.
            The <b>reference problem</b> implementations serve to playing and <b>experimenting</b> with.
          </Typography>
        </Container>

        <div id="architecture" className={classes.linkTarget} />
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
            <Grid item xs={12} sm={6} md={6} alignContent="right">
              <img src={logo} alt="logo" align="right" />
            </Grid>
          </Grid>
        </Container>

        <div id="hyper-heuristics" className={classes.linkTarget} />
        <Container maxWidth="md">
          <Typography component="h2" variant="h3" align="center" color="primary" gutterBottom>
            Hyper-heuristics
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            SEAGE is a hyper-heuristic framework for collaboration of metaheuristic algorithms.
            </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>

              </Grid>
              <Grid item>

              </Grid>
            </Grid>
          </div>
        </Container>

        <div id="publications" className={classes.linkTarget} />
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

        <div id="contacts" className={classes.linkTarget} />
        <Container maxWidth="sm">
          <Typography component="h2" variant="h3" align="center" color="primary" gutterBottom>
            Contacts
          </Typography>
          {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Richard Malek
          </Typography>
          <ul>
            <li>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                <Link >LinkedIn</Link>
              </Typography>
            </li>
          </ul> */}
          <Grid container spacing={10} className={classes.arch}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Richard Malek
              </Typography>              
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div>
              <Typography variant="h6" align="right" color="textSecondary" paragraph>
                <Link href="https://www.linkedin.com/in/malekric" target="_blank">LinkedIn</Link>
              </Typography>    
              <Typography variant="h6" align="right" color="textSecondary" paragraph>
                <Link href="https://github.com/rickq" target="_blank">GitHub</Link>
              </Typography>
              <Typography variant="h6" align="right" color="textSecondary" paragraph>
                <Link href="https://www.researchgate.net/profile/Richard_Malek" target="_blank">ResearchGate</Link>
              </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>

      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
