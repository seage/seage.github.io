import { AppBar, Link, makeStyles, Toolbar, Typography } from "@material-ui/core";
import AdjustIcon from '@material-ui/icons/Adjust';

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
}));

const AppToolbar = () => {
  const classes = useStyles();
  return (
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
  );
};

export default AppToolbar;