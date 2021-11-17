import React from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { getProductDetails, clearErrors } from '../../actions/productActions';

function RelatedProduct() {
    import { useDispatch, useSelector } from "react-redux";

    const {loading, product, error } = useSelector(state => state.getProductDetails);
    return (
        <React.Fragment>
            <h3 className="text-center">Related Product</h3>
            <div className="col-md-3">
                <Carousel pasue="hover">
                    {product.images && product.images.map( image => (
                        <CarouselItem  key={image.public_id}>
                            <Link to={`/product/${product._id}`} >
                                <img className="d-block w-100" src={image.url} alt={product.title} />
                            </Link>
                        </CarouselItem>
                    ))}
                </Carousel>
            </div>
        </React.Fragment>
    )
}

export default RelatedProduct;
