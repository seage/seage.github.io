import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from './Copyright';
import SectionBasics from './SectionBasics';
import SectionArchitecture from './SectionArchitecture';
import SectionHyperheuristics from './SectionHyperheuristics';
import SectionPublications from './SectionPublications';
import SectionContacts from './SectionContacts';
import Intro from './Intro';
import AppToolbar from './AppToolbar';


const useStyles = makeStyles((theme) => ({
  link: {
    paddingRight: theme.spacing(7),
  },
  linkTarget: {
    paddingTop: '85px',
    // marginTop: '-65px'
  },
  main: {
    paddingTop: theme.spacing(5)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: 'auto',
  },

}));

export default function FrontPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppToolbar />
      <main className={classes.main}>
        <div className={classes.heroContent}>
          <Intro />
        </div>

        <div id="basics" className={classes.linkTarget} />
        <SectionBasics/>

        <div id="architecture" className={classes.linkTarget} />
        <SectionArchitecture />

        <div id="hyper-heuristics" className={classes.linkTarget} />
        <SectionHyperheuristics />

        <div id="publications" className={classes.linkTarget} />
        <SectionPublications />

        <div id="contacts" className={classes.linkTarget} />
        <SectionContacts />

      </main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
