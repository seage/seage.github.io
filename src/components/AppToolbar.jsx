import { AppBar, Link, makeStyles, Toolbar, Typography } from "@material-ui/core";
import SeageLogo from '../images/seage-logo.svg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  logoText: {
    color: 'white' //theme.palette.secondary.main
  },
  logoText2: {
    fontSize: '55%',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  nomenu: {
    marginRight: theme.spacing(20),
  },
  nav: {
    flexGrow: 1,
    // align: 'center',
    // marginLeft: theme.spacing(-20)
  },
  link: {
    margin: theme.spacing(1, 2.5),
  },
  linkTarget: {
    paddingTop: '85px',
    // marginTop: '-65px'
  },
  menu: {
    flexGrow: 1,
    textAlign: 'center'
  },
  image: {
    width: theme.spacing(11),
    paddingRight: theme.spacing(2)
  }
}));

const AppToolbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link href="#" color="inherit" underline="none">   
          <img src={SeageLogo} alt="logo"  className={classes.image}/>
        </Link>
        <Typography variant="h5" color="inherit" noWrap>
          <Link href="#" color="inherit" underline="none">
          <span className={classes.logoText}>SEAGE</span>
            {/* <span className={classes.logoText}>SE</span><span className={classes.logoText2}>ARCH</span> */}
            {/* <span className={classes.logoText}>AGE</span><span className={classes.logoText2}>NTS</span> */}
          </Link>
        </Typography>
        <nav className={classes.nav} align="center">
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
        <div className={classes.nomenu}></div>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;