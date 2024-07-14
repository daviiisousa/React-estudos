
import * as S from "./styled"
import { BsCartPlus } from "react-icons/bs"
import { BiLogIn } from "react-icons/bi"

export const Header =() =>{
    return(
        <>
            <S.StyledHeader>
                <S.H1>MyShop.</S.H1>

                <S.ButtonDiv>
                <S.LoginButton>Entrar <BiLogIn /></S.LoginButton>
                <S.CarrinhoDeCompra>Carrinho <BsCartPlus /></S.CarrinhoDeCompra>
                </S.ButtonDiv>

            </S.StyledHeader>
        </>
    )
}