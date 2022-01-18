import React from 'react';
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import FaceIcon from '@material-ui/icons/Face';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PowerOutlinedIcon from '@material-ui/icons/PowerOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import PriorityHighOutlinedIcon from '@material-ui/icons/PriorityHighOutlined';

function Nav() {

    // const drop_btn = document.querySelector(".drop-btn span");
    // const tooltip = document.querySelector(".tooltip");
    const menu_wrapper = document.querySelector(".wrapper");
    const menu_bar = document.querySelector(".menu-bar");
    const setting_drop = document.querySelector(".setting-drop");
    const help_drop = document.querySelector(".help-drop");
    // const setting_item = document.querySelector(".setting-item");
    // const help_item = document.querySelector(".help-item");
    // const setting_btn = document.querySelector(".back-setting-btn");
    // const help_btn = document.querySelector(".back-help-btn");
    const drop_btn = (()=>{
        menu_wrapper.classList.toggle("show");
        // tooltip.classList.toggle("show");
    });
    const setting_item = (()=>{
        menu_bar.style.marginLeft = "-332px";
        setTimeout(()=>{
        setting_drop.style.display = "block";
        }, 100);
    });
    const help_item = (()=>{
        menu_bar.style.marginLeft = "-332px";
        setTimeout(()=>{
        help_drop.style.display = "block";
        }, 100);
    });
    const setting_btn = (()=>{
        menu_bar.style.marginLeft = "0px";
        setting_drop.style.display = "none";
    });
    const help_btn = (()=>{
        help_drop.style.display = "none";
        menu_bar.style.marginLeft = "0px";
    });

    
    return (
        
      <div className='navigation'>
      <div className="drop-btn" onClick={drop_btn}>
         <IconButton>
            
          <MenuIcon />

         </IconButton>
      </div>
      {/* <div className="tooltip"></div> */}
      <div className="wrapper">
         <ul className="menu-bar">
            <li className="setting-item" onClick={setting_item}>
               <Link to="#">
                  <div className="icon">
                     <AccessibilityNewIcon />
                  </div>
                  Men 
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>
            <li className="setting-item" onClick={setting_item}>
               <Link to="#">
                  <div className="icon">
                     <FaceIcon />
                  </div>
                  Women 
                  <i> <ArrowRightIcon /></i>

               </Link>
            </li>
            <li className="setting-item" onClick={setting_item}>
               <Link to="#">
                  <div className="icon">
                     <FaceIcon />
                  </div>
                  Girls 
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>
            <li className="setting-item" onClick={setting_item}>
               <Link to="#">
                  <div className="icon">
                     <AccessibilityNewIcon />
                  </div>
                  Boy
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>
            <li className="setting-item" onClick={setting_item}>
               <Link to="#">
                  <div className="icon">
                     <PhoneAndroidIcon />
                  </div>
                  Phone
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>
            
            <li className="setting-item" onClick={setting_item}>
               <Link to="#">
                  <div className="icon">
                     <PowerOutlinedIcon />
                  </div>
                  Electronices
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>
            
            <li className="setting-item" onClick={setting_item}>
               <Link to="#">
                  <div className="icon">
                     <HeadsetOutlinedIcon />
                  </div>
                  Accessories
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>
            
            <li className="help-item" onClick={help_item}>
               <Link to="/">
                  <div className="icon">
                     <ContactSupportOutlinedIcon />
                  </div>
                  Support
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>
            
            <li>
               <Link to="/">
                  <div className="icon">
                     <HomeOutlinedIcon />
                  </div>
                  Home
               </Link>
            </li>
         </ul>
         <ul className="setting-drop">
            <li className="arrow back-setting-btn" onClick={setting_btn}>
               <ArrowBackIcon />Back
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <PriorityHighOutlinedIcon />
                  </div>
                  Categories 01 
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <PriorityHighOutlinedIcon />
                  </div>
                  Categories 02
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <PriorityHighOutlinedIcon />
                  </div>
                  Categories 03
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <PriorityHighOutlinedIcon />
                  </div>
                  Categories 04
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <PriorityHighOutlinedIcon />
                  </div>
                  Categories 05
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <PriorityHighOutlinedIcon />
                  </div>
                  Categories 06
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <PriorityHighOutlinedIcon />
                  </div>
                  Categories 07
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <PriorityHighOutlinedIcon />
                  </div>
                  Categories 08
               </Link>
            </li>
         </ul>
         {/* <!-- Help & support Menu-items --> */}
         <ul className="help-drop">
            <li className="arrow back-help-btn" onClick={help_btn}>
               <ArrowBackIcon />
               Help support
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-question-circle"></span>
                  </div>
                  Help centre 
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-envelope"></span>
                  </div>
                  Support Inbox 
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-comment-alt"></span>
                  </div>
                  Send feedback 
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-exclamation-circle"></span>
                  </div>
                  Report problem 
               </Link>
            </li>
            
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-exclamation-circle"></span>
                  </div>
                  Opnion Box
               </Link>
            </li>
            
            
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-exclamation-circle"></span>
                  </div>
                  Financial Discussion
               </Link>
            </li>

            
            
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-exclamation-circle"></span>
                  </div>
                  Covid-19 restriction
               </Link>
            </li>

            
            
            
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-exclamation-circle"></span>
                  </div>
                  Survey
               </Link>
            </li>
         </ul>
      </div>
   </div>
    )
}

export default Nav
