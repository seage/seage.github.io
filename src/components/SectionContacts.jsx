import { Container, Grid, Link, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {}
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
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Richard Malek
              </Typography>              
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                <Link href="https://www.linkedin.com/in/malekric" target="_blank">LinkedIn</Link>
              </Typography>    
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                <Link href="https://github.com/rickq" target="_blank">GitHub</Link>
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                <Link href="https://www.researchgate.net/profile/Richard_Malek" target="_blank">ResearchGate</Link>
              </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
    </div>
  );
};

export default SectionContacts;
