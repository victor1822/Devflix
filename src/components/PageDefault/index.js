import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: #141414;
    color: var(--white);
    flex: 1;
    padding-bottom: 15px;
`;

function PageDefault({ children }){
    return(
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export  default PageDefault;