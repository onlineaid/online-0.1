import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import MetaData from './layout/MetaData';
import Product from './product/Product';
import Loader from './layout/Loader';
import { Link } from 'react-router-dom';

import SliderBanner from "../com/slider/Slider";

import { useDispatch, useSelector} from "react-redux";
import { useAlert } from 'react-alert';
import { getProducts } from '../actions/productActions';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);


function Home({ match }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, 1000]);
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(0)

    const categories = [
        'Electronics',
        'Cameras',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        "Books",
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home'
    ]

    const alert = useAlert()

    const dispatch = useDispatch();
    
    const { 
        loading, 
        products, 
        error,  
        productsCount, 
        resPerPage, 
        filteredProductsCount
    } = useSelector(state => state.products);

    const keyword = match.params.keyword;

    useEffect(() => {

        if(error) {
            alert.success("Done")
            return alert.error(error);
        }

        dispatch(getProducts(keyword, currentPage, price, category, rating));

    }, [dispatch, alert, error, keyword, currentPage, price, category, rating]);

    function setCurrentPageNo(pageNumber){
        setCurrentPage(pageNumber)
    }

    let count = productsCount;
    if(keyword) {
        count = filteredProductsCount;
    }

    return (
        <React.Fragment>
            {loading ? <Loader /> : (
                <React.Fragment>
                    <MetaData title={'Buy best product online'} />

                    {!keyword ?
                            <SliderBanner />
                    : <Link to='/' className='btn btn-light'>Go Back</Link>}

                   
                    <div className="user-info shadow custom-radius">
                        <div className="row mt-5">
                            <div className="col-md-3">
                                <div className="free-shipping">
                                <div>
                                     <i class="fa fa-truck" aria-hidden="true"></i>
                                </div>
                                <div className="div">
                                    <h6>FREE SHIPPING & RETURN</h6>
                                    <p>Free shipping on all order over $99.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                
                            <div className="free-shipping">
                                <div>
                                    <i class="fa fa-usd" aria-hidden="true"></i>
                                </div>
                                    <div className="div">
                                        <h6>MONEY BACK GUARANTEE</h6>
                                        <p>100% money back guarantee</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="free-shipping">
                                    <div>
                                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                                    </div>
                                    <div className="div">
                                        <h6>ONLINE SUPPORT 14/7</h6>
                                        <p>Support on time just contact us</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="free-shipping">
                                    <div className="div">
                                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                                    </div>
                                    <div className="div">
                                        <h6>SECURE PAYMENT</h6>
                                        <p>Money refund policy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   

                    <div className="heading text-center">
                        <h3 id="products_heading" className="mt-5">Latest Products</h3>
                        <p>Select from the premium product brands and save plenty money</p>
                    </div>
                    <section id="products" className="container">
                        <div className="row">

                            {keyword ? (
                                <React.Fragment>
                                    <div className="col-6 col-md-3 my-5 col-sm-12">
                                        <div className="px-2">
                                            <Range 
                                                marks={{
                                                    1 : `$1`,
                                                    1000: `$1000`
                                                }}
                                                min={1}
                                                max={1000}
                                                defaultValue={[1,1000]}
                                                tipFormatter={ value => `$${value}`}
                                                tipProps={{
                                                    placement: 'top',
                                                    visible: true
                                                }}
                                                value={price}
                                                onChange={price => setPrice(price)}
                                            />

                                            <hr className="my-5" />

                                            <div>
                                                <h4 className="text-dark">
                                                    Categories 
                                                </h4>
                                                <ul className="category_name">
                                                    {categories.map( category => (
                                                        <li 
                                                            key={category}
                                                            onClick={ ()=> setCategory(category)}
                                                        >
                                                            {category}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            
                                            <hr className="my-5" />

                                            <div className="mt-5">
                                                <h4 className="text-dark">
                                                    Rating
                                                </h4>
                                                <ul className="rating list-style-none">
                                                    {[5,4,3,2,1].map( star => (
                                                        <li 
                                                            key={star}
                                                            onClick={ ()=> setRating(star)}
                                                        >
                                                            <div className="rating-outer">
                                                                <div className="rating-inner" style={{
                                                                    width :`${star * 20}%`
                                                                    }}>
                                                                </div>
                                                            </div>
                                                        </li> 
                                                    ))}
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-6 col-md-9 col-sm-12">
                                        <div className="row">
                                            {products && products.map( product => (  
                                                <Product key={product._id} product={product} col={4} />
                                            ))}
                                        </div>
                                    </div>
                                </React.Fragment>
                            ) : (
                                
                                products && products.map( product => (  
                                    <Product key={product._id} product={product} col={3} />
                                ))
                            )}
                        </div>
                    </section>

                    {resPerPage <= count && (
                        <div className="d-flex justify-content-center my-5">
                            <Pagination 
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                // firstPageText={'First'}
                                // lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                    )}
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Home
