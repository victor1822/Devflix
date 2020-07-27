import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
//import ButtonLink from './components/ButtonLink';

import Button from '../Button';

function Menu () {
    return(
        <nav className="Menu">
            <a href="/">
            <img src={Logo} alt="DevFlix Logo" className="Logo" />
            </a>
            <Button as="a">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;