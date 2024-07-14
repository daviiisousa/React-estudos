
import * as S from "./styled"
import { BsCartPlus } from "react-icons/bs"
import { BiLogIn } from "react-icons/bi"

export const Header =() =>{
    const Logout = false
    return(
        <>
            <S.StyledHeader>
                <S.H1>MyShop.</S.H1>

                <S.ButtonDiv>
                <S.LoginButton>
                    {Logout ? 'Sair' : 'Entrar'}
                    <BiLogIn /></S.LoginButton>
                <S.CarrinhoDeCompra>Carrinho <BsCartPlus /></S.CarrinhoDeCompra>
                </S.ButtonDiv>

            </S.StyledHeader>
        </>
    )
}