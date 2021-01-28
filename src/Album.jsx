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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
    margin: theme.spacing(7, 10),
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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
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
                <img src="https://raw.githubusercontent.com/seage/web/gh-pages/images/logo.png" alt="logo"/>
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
        <Container maxWidth="sm">
          <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom style={{ color: '#314d7f' }}>
            Basics
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            SEAGE is a hyper-heuristic framework for collaboration of metaheuristic algorithms.
            </Typography>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={10}>
            <CustomizedTables />
          </Grid>
        </Container>

        <div id="architecture" className={classes.linkTarget} />
        <Container maxWidth="sm">
          <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom style={{ color: '#314d7f' }}>
            Architecture
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
        <Container maxWidth="sm">
          <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom style={{ color: '#314d7f' }}>
            Publications
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
       
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
