import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled, { css } from 'styled-components';

const Main = styled.main`
    background-color: #000;
    color: var(--white);
    flex: 1;
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 15px;
    ${({marginAll}) => css`
        margin-left: ${marginAll};
        margin-right: ${marginAll};
    `}
`;

const Container = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    background-color: #000;
`;

function PageDefault({ children, marginAll }){
    return(
        <Container>
            <Menu />
                <Main marginAll={marginAll}>
                    {children}
                </Main>
            <Footer />
        </Container>
    );
}

export  default PageDefault;