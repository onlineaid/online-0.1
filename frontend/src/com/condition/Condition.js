import React from 'react'

function Condition() {
  return (
    <div className="col-md-12 mt-5 py-3">       
        <div className='shadow user-info custom-radius p-3'>
        <div className="free-shipping">
            <div>
                <i class="fa fa-truck" aria-hidden="true"></i>
            </div>
            <div className="div">
                <h6>FREE SHIPPING & RETURN</h6>
                <p>Free shipping on all order over $99.</p>
            </div>
        </div>
        <div className="free-shipping">
            <div>
                <i class="fa fa-usd" aria-hidden="true"></i>
            </div>
                <div className="div">
                    <h6>MONEY BACK GUARANTEE</h6>
                    <p>100% money back guarantee</p>
                </div>
            </div>
            
            <div className="free-shipping">
                <div>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <div className="div">
                    <h6>ONLINE SUPPORT 14/7</h6>
                    <p>Support on time just contact us</p>
                </div>
            </div>
            
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
  )
}

export default Condition