import React from 'react';
import resumedata from '../../utils/resumedata';
import CustomButton from '../HireMe/Hireme';
import './Header.css'; // Import the CSS file
import {
  Navbar,
  Nav,
  NavbarBrand,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HomeRounded,
  Telegram,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom'; // No need for withRouter if not used

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className='header'>
      <Nav.Link as={NavLink} exact to="/" className="header_navlink">
        <NavbarBrand className="header_home">
          <HomeRounded />
        </NavbarBrand>
      </Nav.Link>
      <Nav className="mr-auto">
        <Nav.Link
          as={NavLink}
          to="/resume"
          className="header_link"
          activeClassName="header_link_active"
        >
          <h5>Resume</h5>
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/portfolio"
          className="header_link"
          activeClassName="header_link_active"
        >
          <h5>Portfolio</h5>
        </Nav.Link>
      </Nav>

      <div className='header_right'>
        {Object.keys(resumedata.Social).map(key => (
          <a href={resumedata.Social[key].link} target='_blank' rel='noopener noreferrer' key={key}>
            {resumedata.Social[key].icon}
          </a>
        ))}
        <CustomButton text={'Hire Me'} icon={<Telegram />} />
      </div>
    </Navbar>
  );
};

export default Header;
