import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #2C3333;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
`

export const H1 = styled.h1` 
    color: white;
`

export const ButtonDiv= styled.div` 
    display: flex;
    align-items: center;
`

export const LoginButton = styled.button`
    padding: 5px 10px;
    font-size: 15px;
    border-radius: 5px;
    background-color: #2E4F4F;
    border: none;
    color: white;
    margin-right: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.5s;

    &:hover{
        background-color: #0E8388;
        transition: 0.5s;
    }
`

export const CarrinhoDeCompra = styled.button`
    padding: 5px 10px;
    font-size: 15px;
    border-radius: 5px;
    background-color: #0E8388;
    border: none;
    color: white;
    transition: 0.5s;

    &:hover{
        background-color: #2E4F4F;
        transition: 0.5s;
    }
`