import styled, { css } from "styled-components";

const Button = styled.button`
    ${({width}) => css`
        width: ${width};
    `}
    ${({height}) => css`
        height: ${height};
    `}
    color: var(--white);
    background:  var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover,
    &:focus {
    opacity: .5;
  }
`;

export default Button;