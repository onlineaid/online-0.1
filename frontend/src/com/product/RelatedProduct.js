// import React, { useEffect, useState } from 'react';
// import {Carousel, CarouselItem} from 'react-bootstrap';
// import { Link, withRouter } from 'react-router-dom';
// // import Product from './Product';
// import { useDispatch, useSelector} from "react-redux";
// import { getProducts } from '../../actions/productActions';
// import { useAlert } from 'react-alert';


// function RelatedProduct() {
//     const dispatch = useDispatch();
//     const { loading, products, error } = useSelector(state => state.products);
//     const alert = useAlert()


//     useEffect(() => {

//         if(error) {
//             alert.success("Done")
//             return alert.error(error);
//         }

//         dispatch(getProducts());

//     }, [dispatch]);

//     return (
//         <React.Fragment>
//             {loading ? <Loader /> : (
//                 <React.Fragment>
//                     <h3 className="text-center">Related Product</h3>
//                      {products && products.map( product => (  
//                 // <Product key={product._id} product={product} col={3} />
//                 <div key={product._id} className={`col-sm-12 col-md-4 col-lg-4 my-3`}>
//                     <div className="card p-3 rounded shadow-lg">
//                         <img
//                         className="card-img-top mx-auto"
//                         src={product.images[0].url} alt="img"/>
//                             <div className="card-body d-flex flex-column">
//                                 <h5 className="card-title">
//                                     <Link to={`/product/${product._id}`} >{product.name}</Link>
//                                 </h5>
//                             <div className="ratings mt-auto">
//                                 <div className="rating-outer">
//                                     <div className="rating-inner" style={{width :`${
//                                     (product.ratings / 5) * 100}% `}}>
//                                     </div>
//                                 </div>
//                                 <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
//                             </div>
//                             <p className="card-text">${product.price}</p>
//                             <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
//                         </div>
//                     </div>
//                 </div>
//                     ))}
//                 </React.Fragment>
//             )}
//         </React.Fragment>
//     )
// }

// export default RelatedProduct;
