import { createUseStyles } from 'react-jss';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import NavLabel from './NavLabel';



const styles = createUseStyles({

    sideBar: {
        top: '100px',
        backgroundColor: 'rgb(172, 229, 181)',
        position: 'fixed',
        width: '100px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        },

    links: {
        marginTop: '20px',
        
        height: '100px',
        backgroundColor: 'rgb(172, 229, 181)',
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'right',
        rowGap: '50px',
        alignItems: 'center',
        flexDirection: 'column',
        

    }


})



{/** links  do zweryfikowania ^^^^^^ */}
function SideBar() {
    const classes = styles();


    return (

        <div className={classes.sideBar}>
            <div className={classes.links}>
                {/* potencjalny search bar czy cos*/}
                    <NavLabel text="Posts" adress="/posts" fontSize='20px' ></NavLabel>
                    <NavLabel text="Albums" adress="/albums" fontSize='20px' ></NavLabel>
                    <NavLabel text="Todos" adress="/todos" fontSize='20px' ></NavLabel>
                    <NavLabel text="Users" adress="/users" fontSize='20px' ></NavLabel>


                
            </div>
        </div>
    );
}

export default SideBar;
