import { createUseStyles } from 'react-jss';
import { companyVersions } from '../data/companyData';
import React from 'react';

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

function Home() {
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

export default Home;
