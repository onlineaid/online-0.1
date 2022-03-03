import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <>
        <div className="col-md-3">
            <div className="blog shadow-lg text-center">
                <img src="https://i.pinimg.com/564x/36/27/0e/36270e572f53f252651ab26edc4d0ab7--business-meeting-photography-business.jpg" alt="" />
                <h5 className='text-black'>A guide to latest trends product</h5>
                <p> <i>By admin</i> </p>
            </div>
        </div>

        <div className="col-md-3">
            <div className="blog shadow-lg text-center">
                <img src="https://media.istockphoto.com/photos/global-business-logistics-import-export-background-and-container-picture-id1266958681?k=20&m=1266958681&s=612x612&w=0&h=VfpQl6Fe83meeTksLdtIvoclXldL2bfD7D9A72WO5nI=" alt="" />
                
                <h5 className='text-black'>A guide to latest trends product</h5>
                <p> <i>By admin</i> </p>
                
            </div>
        </div>

        <div className="col-md-3">
            <div className="blog shadow-lg text-center">
                <img  src="https://www.delta-net.com/images/files/4611/1200x800.jpg" alt="" />

                <h5 className='text-black'>Secure payment Lead a happy life</h5>
                <p> <i>By admin</i> </p>


            </div>
        </div>

        <div className="col-md-3">
            
            <div className="blog shadow-lg text-center">
                 <img src="https://www.startingbusiness.com/blog/uploads/article/672/business-plan.jpg" alt="" />

                <h5 className='text-black'>Tips on having a happy life forever</h5>
                <p> <i>By admin</i> </p>


            </div>
            
        </div>

    </>
  )
}

export default Blog