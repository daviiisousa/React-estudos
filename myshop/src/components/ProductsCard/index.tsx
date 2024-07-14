import { BsCartPlus } from 'react-icons/bs'
import * as S from './styled'

export const ProductsCards = () =>{
    return(
        <>
            <S.Cards>
                <S.CarsImg src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='Brusa'/>

                <S.CardsTitle>Brusa</S.CardsTitle>
                <S.ContainerPriceReview>
                    <S.Review>bom</S.Review>
                    <S.Price>R$ 100</S.Price>
                </S.ContainerPriceReview>

                <S.ButtonAddToCardContainer>
                    <S.ButtonAddToCard>Adicionar ao carrinho <BsCartPlus /></S.ButtonAddToCard>
                </S.ButtonAddToCardContainer>
            </S.Cards>
        </>
    )
}