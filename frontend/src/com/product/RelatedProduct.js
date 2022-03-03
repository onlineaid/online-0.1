import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
// import { useAlert } from 'react-alert';
import Loader from '../layout/Loader';
import { getProducts } from '../../actions/productActions';

function RelatedProduct() {

    const dispatch = useDispatch();

    const {loading, error, products } = useSelector( state => state.products)

    // console.log(products)


    useEffect(() => {

        if(error) {
            alert.success("Done")
            return alert.error(error);
        }

        // console.log(dispatch(getProducts()))

        dispatch(getProducts())

    }, [dispatch, error]);


  return (
    <React.Fragment>
        {loading ? <Loader /> : (
            <React.Fragment>
                {products && products.map(product =>(
                    <div key={product.id}>
                        <h1>{product.name}</h1>
                    </div>
                ))}
                
            </React.Fragment>
        ) }
    </React.Fragment>
  )
}

export default RelatedProduct