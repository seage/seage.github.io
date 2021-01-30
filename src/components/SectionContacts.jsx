import { Container, Grid, Icon, Link, makeStyles, Typography } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import rgSvg from '../images/researchgate.svg';
const useStyles = makeStyles((theme) => ({
  links: {
    // backgroundColor: 'yellow',
    // margin: 'auto',
    textAlign: 'center'
  },
  linksNav: {
    // backgroundColor: 'red',
    textAlign: 'left',
    display:'inline-block'
  },
  name: {
    textAlign: 'center'
    // backgroundColor: 'red',
    // height: '100%'
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const SectionContacts = () => {
  const classes = useStyles();
  return (
    <div>
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
            <Grid item xs={12} sm={6} md={6} className={classes.name}>
              <div className={classes.linksNav}>
                <Typography variant="h5" color="primary" paragraph>
                  Richard Malek
                </Typography>   
                <Typography variant="h7" color="textSecondary" paragraph>
                  Prague
                </Typography>
                <Typography variant="h7" color="textSecondary" paragraph>
                  Czech Republic
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className={classes.links}>
              {/* <div > */}
                <nav align="left" className={classes.linksNav}>
                  <Typography variant="h6" color="textSecondary" paragraph>
                    <LinkedInIcon className={classes.icon}/>
                    <Link href="https://www.linkedin.com/in/malekric" target="_blank">LinkedIn</Link>
                  </Typography>    
                  <Typography variant="h6" color="textSecondary" paragraph>
                    <GitHubIcon className={classes.icon}/>
                    <Link href="https://github.com/rickq" target="_blank">GitHub</Link>
                  </Typography>
                  <Typography variant="h6" color="textSecondary" paragraph>
                    <Icon className={classes.icon}>
                      <img src={rgSvg} height={24} width={24} alt="rg"/>
                    </Icon>
                    <Link href="https://www.researchgate.net/profile/Richard_Malek" target="_blank">ResearchGate</Link>
                  </Typography>
                </nav>
              {/* </div> */}
            </Grid>
          </Grid>
        </Container>
    </div>
  );
};

export default SectionContacts;
