import React from 'react';
import { createUseStyles } from 'react-jss';
import { companyVersions } from '../data/companyData';

const company = companyVersions.companyPL;

const styles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sum: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontSize: '34px',
    marginLeft:'50vh',
    marginTop:'30vh',
    textAlign:'center'
  },
});

function About() {
  const classes = styles();

  return (
    <div className={classes.container}>
      <div className={classes.sum}>
        Projekt zaliczeniowy wykonany przez:<br />
        Bartosz Adamek<br />
        Mateusz Czernik
      </div>
    </div>
  );
}

export default About;