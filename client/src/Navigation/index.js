import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';

import './styles.css';


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const authData = useSelector(state => state.authReducer.authData);
  const toggle = () => setIsOpen(!isOpen);
  
  const logout = ()  => {
    dispatch({type: 'LOGOUT'});
    history.push('/');
    setUser((prevUser ) =>  prevUser = null );

  }

  useEffect(() => {
     
     setUser((prevUser => prevUser =  JSON.parse(localStorage.getItem('profile'))));
 
  }, []);

return (
 <div>
      <Navbar color="dark" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to='/about'>About Me</Link>
            </NavItem>
            <NavItem>
              <Link to='/blog'>Blog</Link>
            </NavItem>
            <NavItem>
              <Link to='/posts'>Feedback</Link>
            </NavItem>
          </Nav>
          {(authData !== null) ? <Button 
          onClick={logout} 
          > {`Logout : ${authData?.result.name}` }</Button>  :    
          <Link to='/auth' style={{textDecoration: 'none', fontSize: '1.5em', color:'white'}}>Sign In</Link>
         
          }        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;