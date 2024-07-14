import { ProductsCards } from '../ProductsCard'
import * as S from './styled'
import { products } from '../../data/products'

export const ProductList = () =>{
    return(
        <>
            <S.ContainerList>
                { products.map((product) =>(
                    <ProductsCards key={product.id} productr={product}/>
                ))}
            </S.ContainerList>
        </>
    )
}