import { createUseStyles } from 'react-jss';
import logo from '../logo.svg';
import { companyVersions } from '../data/companyData';

//import './App.css';
// bacground color 172, 229, 181, 1
const company = companyVersions.companyPL;

const styles = createUseStyles({
    logo: {
        width: '100px',
        height: '100px',
    },
    navBar: {
        height: '100px',
        backgroundColor: 'rgb(172, 229, 181)',
        position: 'fixed',
        width: '100%'
    }
});

function Home() {
    const classes = styles();



    return (

        <div className="Bob">
            <h1>Welcome to {company.name}</h1>
        </div>
    );
}

export default Home;
