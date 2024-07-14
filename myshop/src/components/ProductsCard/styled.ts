import styled from "styled-components";


export const Cards = styled.article`
    width: 100%;
    padding: 2rem;
    margin: 0 auto;
    background-color: #CBE4DE;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
`

export const CarsImg = styled.img`
    width: 250px;
    height: 400px;
    object-fit: contain;
    border-radius: 10px;
`

export const CardsTitle = styled.h2`
    font-weight: 500;
    font-size: 1.2rem;
    margin-top: 16px;
`

export const ContainerPriceReview = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 16px;
`

export const Price = styled.strong``

export const Review = styled.span``

export const ButtonAddToCardContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const ButtonAddToCard = styled.button`
    padding: 5px 10px;
    font-size: 15px;
    border-radius: 5px;
    background-color: #0E8388;
    border: none;
    color: white;
    width: 100%;
`