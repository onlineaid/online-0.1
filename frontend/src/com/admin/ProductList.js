import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import {MDBDataTable} from 'mdbreact';

import Sidebar from './Sidebar';

import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts, deleteProduct, clearErrors} from '../../actions/productActions'
import { DELETE_PRODUCT_RESET } from '../../constants/productConstants'

function ProductList({ history }) {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, products } = useSelector(state => state.products);
    const { error: deleteError, isDeleted } = useSelector(state => state.productDelete)

    useEffect(() => {
        dispatch(getAdminProducts());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted){
            alert.success('Product delete successfully');
            history.push('/admin/products')
            dispatch({type: DELETE_PRODUCT_RESET})
            
        }

    }, [dispatch, alert, error, deleteError, isDeleted, history]);


    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Price',
                    field: 'price',
                    sort: 'asc'
                },
                {
                    label: 'Stock',
                    field: 'stock',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions'
                },
            ],
            rows: []
        }

        products.forEach((product) => {
            data.rows.push({
                id: product._id,
                name: product.name,
                price: `$${product.price}`,
                stock: product.stock,
                actions: <React.Fragment>
                        <Link to={`/admin/product/${product._id}`} className="btn btn-primary py-1 px-2">
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <button 
                        className="btn btn-danger py-1 px-2 ml-2" 
                        onClick={ () => deleteProductHandler(product._id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                </React.Fragment>
            })
        })

        return data;
    }

    const deleteProductHandler = (id) => {
        let warning = 'Are you sure to delete this item ?'
        if (window.confirm(warning)) {
            dispatch(deleteProduct(id))
        } else {
            return 'Product delete';
        }
    }

    return (
        <React.Fragment>
            
            <MetaData title={'All Product'}/>

            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10">
                    <React.Fragment>

                        <h1 className="my-5">All Products</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setProducts()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </React.Fragment>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductList
