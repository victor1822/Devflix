import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import styled from 'styled-components';
//import ButtonLink from './components/ButtonLink';

import Button from '../Button';

const Nav = styled.nav`
    background-color: #141414;
`;

function Menu () {
    return(
        <Nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="DevFlix Logo" className="Logo" />
            </Link>
            <Button as={Link} to="/cadastro/video">
                Novo Vídeo
            </Button>
        </Nav>
    );
}

export default Menu;