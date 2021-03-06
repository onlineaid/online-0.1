import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import MetaData from './layout/MetaData';
import Product from './product/Product';
import Loader from './layout/Loader';
import SliderBanner from "../com/slider/Slider";
import TopProduct from './product/TopProduct' 
import Blog from '../com/blog/Blog'
import Condition from './condition/Condition';

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
        // {category: 'Electronics'},
        // {category: 'Cameras'},
        // {category: 'Laptops'},
        // {category: 'Accessories'},
        // {category: 'Headphones'},
        // {category: 'Food'},
        // {category: 'Books'},
        // {category: 'Clothes/Shoes'},
        // {category: 'Beauty/Health'},
        // {category: 'Sports'},
        // {category: 'Outdoor'},
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
        'Home',
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
    // console.log(products)

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
                   
                    

                    

                    {/* <ul className="category_name">
                        {categories.map( category => (
                            <li 
                                key={category}
                                onClick={ ()=> setCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul> */}

                    {/* <ui>
                        {categories.map (({ category }) => {
                             <li 
                             key={category}
                             onClick={ ()=> setCategory(category)}
                         >
                             {category}
                         </li>
                        })}
                    </ui> */}
                   

                    
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
                            ) :
                                <React.Fragment>

                                    <div className="col-md-12">
                                        <SliderBanner />
                                    </div>

                                    <Condition />
                                    
                                    <div className="col-md-12">
                                        <div className="heading text-center">
                                        <h3 id="products_heading" className="mt-5">Top Products</h3>
                                        <p>Select from the premium product brands and save plenty money</p>
                                    </div>
                                    </div>
                                    
                                    <TopProduct />

                                    <div className="col-md-12 my-3">
                                        <div className="heading text-center">
                                            <h3 id="products_heading" className="mt-5">Category Products</h3>
                                            <p>Select from the premium product brands and save plenty money</p>
                                        </div>
                                    </div>
                                    {products && products.filter( product =>  product.category === "Electronics")
                                        .map(product => (
                                            <Product key={product._id} product={product} col={3} />
                                        ))
                                    }
                                    
                                    <div className="col-md-12 my-3">
                                        <div className="heading text-center">
                                            <h3 id="products_heading" className="mt-5">Feature Products</h3>
                                            <p>Select from the premium product brands and save plenty money</p>
                                        </div>
                                    </div>
                                    {products && products.map( product => (  
                                        <Product key={product._id} product={product} col={3} />
                                    ))}

                                    

                                    
                                </React.Fragment>
                            }

                        </div>
                    </section>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 my-3">
                                <div className="heading text-center">
                                    <h3 id="products_heading" className="mt-5">Blog List</h3>
                                </div>
                            </div>
                            <Blog />
                        </div>
                    </div>

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
