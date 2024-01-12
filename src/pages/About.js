import { createUseStyles } from 'react-jss';
import logo from '../logo.svg';
import { companyVersions } from '../data/companyData';

//import './App.css';
// bacground color 172, 229, 181, 1
    const company = companyVersions.companyPL;
    

    const styles = createUseStyles({
        logo : {
            width : '100px',
            height : '100px',
        },
        navBar : {
            height : '100px',
            backgroundColor : 'rgb(172, 229, 181)',
            position : 'fixed',
            width : '100%'
        }



    })

function About() {
    const classes = styles();


    return (

      <div className="AboutContet">
        <h1>
            We are {company.name}
        </h1>
        {company.slogan}
      </div>
      );
  }
  
  export default About;
  