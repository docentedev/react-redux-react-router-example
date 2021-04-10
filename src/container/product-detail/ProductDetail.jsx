import { useEffect } from "react";
import {
    useParams,
    Link,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import routes from "../../routes";
import { productGet, productGetAll, productViewed, productNotViewed } from '../../store/product/actions'
import { getAllProductSelector, getProductSelector } from "../../store/product/selectors";

const ProductDetail = () => {
    const dispatch = useDispatch()
    const product = useSelector(getProductSelector)
    const products = useSelector(getAllProductSelector)

    const { id } = useParams()

    useEffect(() => {
        if (products.length === 0) dispatch(productGetAll())
        if (products.length > 0) dispatch(productGet(id))
    }, [id, products, dispatch])

    const handleMarkViewed = () => {
        const idProduct = product.id
        dispatch(productViewed(idProduct))
    }

    const handleMarkNotViewed = () => {
        const idProduct = product.id
        dispatch(productNotViewed(idProduct))
    }
    
    return product ? (
        <div>
            <div>ProductDetail {product.name}</div>
            {product.id && <img  src={product.imageUrl} alt="img" className="img-fluid" />}
            {product.id && <div>Descripción: {product.content}</div>}
            {product.id && <div>Precio: {product.price}</div>}
            <button onClick={handleMarkViewed}>Marcar como visto</button>
            <button onClick={handleMarkNotViewed}>Marcar como no visto</button>
            <Link to={routes.PRODUCT}>Volver</Link>
        </div>
    ) : (<div>Loading...</div>)
}

export default ProductDetail
