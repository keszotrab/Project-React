import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';


const styles = createUseStyles({
  coolLabel: {
    backgroundColor: 'rgb(255, 55, 55)',
    color: 'rgb(233, 245, 255)',
    fontSize: props => props.fontSize || '30px',
    borderRadius: '30px',
    padding: '5px',
    height: '50px',
    textDecoration: 'none',
    fontFamily: 'Roboto, sans-serif',

  },

  noUnderline: {
    textDecoration: 'none',
  },
  

})


function NavLabel(props) {
  const classes = styles(props);

  return (
    <div className={classes.coolLabel}>
      <Link to={props.adress} className={classes.noUnderline} >  
        {props.text}
      </Link>
    </div>
  );
}

export default NavLabel;
