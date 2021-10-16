import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from 'react-alert';
import {logout} from '../../actions/userActions'

import Search from './Search';


function Header({countryName}) {

    const alert = useAlert();
    const dispatch = useDispatch();
    const {user, loading} = useSelector(state => state.auth)
    const {cartItems} = useSelector(state => state.cart)

    
    

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logout successfully.')
    }

    const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
    `;
    
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
    </StyledApp>
        <React.Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3 order-sm-1 col-sm-6 order-md-1">
                    <div className="logo_location">
                        <div className="navbar-brand">
                            <Link to="/" class='text-decoration-none'>
                                <img src="../images/shopit_logo2.png" alt="Logo" />
                            </Link>
                        </div>
                        
                        <div className='user_location'>
                            {countryName !== "" && (
                            <div className="header__delivery">
                                    <LocationOnOutlinedIcon className="location_icon" />
                                    
                                
                                <div className="options d-flex flex-column">
                                    <span className="headerNav__optionLineOne text-white app__text_color">Deliver to</span>
                                    <span className="headerNav__optionLineTwo text-white app__text_color">{countryName}</span>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0 order-sm-3 col-sm-12 order-md-2">
                    <Route render={ ({history})=> <Search history={history} />} />
                </div>

                <div className="col-12 col-md-3 mt-md-0 text-center order-sm-2 order-md-3 col-sm-6">

                
                    {/* <button >btn</button> */}

                    <Link to="/cart" className='cart_link'>
                        <span id="cart" className="ml-3 cart"><ShoppingCartSharpIcon /></span>
                        <span className="cart_length_round app__text_color" id="cart_count">{cartItems.length}</span>
                    </Link>

                    {user ? (

                        <div className="dropdow d-inline">
                            <Link to='#!' className='btn dropdown-toggle text-white profile__zone' id='dropDownMenuButton' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                <figure className="avatar avatar-nav">
                                    <img 
                                        src={user.avatar && user.avatar.url } 
                                        alt={user && user.name}
                                        className='rounded-circle'
                                    />
                                </figure>
                                <span className='text-white app__text_color'>
                                    {user && user.name}
                                    {/* <i className="fa fa-tachometer"></i> */}
                                </span>
                            </Link>


                            <div className="dropdown-menu shadow-sm" aria-labelledby="dropDownMenuButton">

                                {user && user.role === 'admin' && (
                                    // <i className="fa fa-tachometer"></i>
                                     <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                )}

                                <Link to="/orders/me" className="dropdown-item">Orders</Link>
                                <Link to="/me" className="dropdown-item">Profile</Link>
                                <Link to="/" className="dropdown-item text-danger" onClick={logoutHandler}>
                                    Logout
                                </Link>
                                <div className="dark__mood"> Dark Mood
                                    <label class="switch mb-0">
                                        <input type="checkbox" onClick={() => themeToggler()} />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>


                        </div>

                            
                        ) : !loading && <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>
                        
                    }
                    

                    
                </div>
            </nav>
        </React.Fragment>
        </ThemeProvider>
    )
}

export default Header
