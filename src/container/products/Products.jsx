import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import {
    Link,
    useLocation,
  } from "react-router-dom";
import routes from '../../routes'
import { productGetAll } from '../../store/product/actions'
import { getAllProductSelector } from "../../store/product/selectors";

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(getAllProductSelector)

    const [order, setOrder] = useState('DESC')
    const location = useLocation()

    useEffect(() => {
        if (products.length === 0) dispatch(productGetAll())
    }, [products, dispatch])

    useEffect(() => {
        const search = new URLSearchParams(location.search) 
        const o = search.get('order')
        if (o) {
            setOrder(o)
        }
    }, [location])
    
    return (
        <div>
            <div>Products {order}</div>
            {products.map((product) => (
                <div key={product.id} className={`card ${product.viewed ? 'bg-dark' : ''}`}>
                    <div className="card-header">
                        {product.name}
                    </div>
                    <div className="card-body">
                        <Link to={`${routes.PRODUCT}/${product.id}`} >Detalle</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products
