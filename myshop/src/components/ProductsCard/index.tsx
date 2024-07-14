import { BsCartPlus } from 'react-icons/bs'
import * as S from './styled'
import { product } from '../../data/products'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

interface productCardsProps{
    productr: product
}

export const ProductsCards: React.FC<productCardsProps> = ({productr,}) =>{
    return(
        <>
            <S.Cards>
                <S.CarsImg src={productr.image} alt={productr.description}/>

                <S.CardsTitle>{productr.title}</S.CardsTitle>
                <S.ContainerPriceReview>
                    <S.Review>
                        {Array.from({length: 5}).map((_, index) => index < Math.round(productr.rating.rate) ? (<FaStar key={index}/>) : (<FaRegStar key={index}/>))}
                        {productr.rating.rate}
                        </S.Review>
                    <S.Price>{productr.rating.count}</S.Price>
                </S.ContainerPriceReview>

                <S.ButtonAddToCardContainer>
                    <S.ButtonAddToCard>Adicionar ao carrinho <BsCartPlus /></S.ButtonAddToCard>
                </S.ButtonAddToCardContainer>
            </S.Cards>
        </>
    )
}