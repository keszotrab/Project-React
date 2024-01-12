import { createUseStyles } from 'react-jss';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import NavLabel from './NavLabel';
//import './App.css';
// bacground color 172, 229, 181, 1


const styles = createUseStyles({
    logo: {
        width: '100px',
        height: '100px',
    },
    navBar: {
        height: '100px',
        backgroundColor: 'rgb(172, 229, 181)',
        position: 'fixed',
        width: '100%',
        display: 'flex',
    },
    links: {
        height: '100px',
        backgroundColor: 'rgb(172, 229, 181)',
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'right',
        columnGap: '20px',
        alignItems: 'center',
    }

})

function NavBar() {
    const classes = styles();


    return (

        <div className={classes.navBar}>
            <Link to="/">
                <img src={logo} className={classes.logo} alt="logo" />
            </Link>
            <div className={classes.links}>
                {/* potencjalny search bar czy cos*/}
                    <NavLabel text="Dołącz teraz!" adress="/about" fontSize='40px'></NavLabel>
                    <NavLabel text="O nas" adress="/about" fontSize='40px'></NavLabel>
                
            </div>
        </div>
    );
}

export default NavBar;
