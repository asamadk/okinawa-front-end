import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import QuizIcon from '@mui/icons-material/Quiz';
import InfoIcon from '@mui/icons-material/Info';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import '../Styles/Navbar.css'

const Navbar = () => { 

    const [state, setState] = React.useState(false);

      const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState(open);
      };

      const list = () => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
        <Link to={'/'}>
          <List>
              <ListItem button>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary={'Home'}/></ListItem>
          </List>
        </Link>
        <Link to={'/solutions'}>
          <List>
              <ListItem button>
                <ListItemIcon><LightbulbIcon/></ListItemIcon>
                <ListItemText primary={'Solutions'}/></ListItem>
          </List>
        </Link>
        <Link to={'/faq'}>
          <List>
              <ListItem button>
                <ListItemIcon><QuizIcon/></ListItemIcon>
                <ListItemText primary={'FAQs'}/></ListItem>
          </List>
        </Link>
        <Link to={'/about'}>
          <List>
              <ListItem button>
                <ListItemIcon><InfoIcon/></ListItemIcon>
                <ListItemText primary={'About Us'}/></ListItem>
          </List>
        </Link>
        <Link to={'/contact'}>
          <List>
              <ListItem button>
                <ListItemIcon><PermContactCalendarIcon/></ListItemIcon>
                <ListItemText primary={'Contact Us'}/></ListItem>
          </List>
        </Link>
        </Box>
      );

    return(
        <>
        <div className="navbar-main-container"> 
        <div className="navbar-left-container">
            <div className="main-logo">
                <img src='oki.jpeg'></img>
                <h1>Okinawa</h1>
            </div>
            <div className="navbar-hamburger">
                <MenuIcon onClick={toggleDrawer(true)}/>
                <Drawer
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </div>
            <ul><Link to='/'> Home</Link></ul>
            <ul><Link to='/solutions'> Solutions</Link></ul>
            <ul><Link to='/faq'> FAQs</Link></ul>
            <ul><Link to='/about'> About Us</Link></ul>
        </div>
        <div className="navbar-right-container">
            <Link to={'/contact'}><button className="navbar-right-button">Contact Us</button></Link>
        </div>
        </div>
        </>
    )
}

export default Navbar