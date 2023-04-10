import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import wish from "../images/wish.svg";
import tab from "../images/tab.jpg"
import tab1 from "../images/tab1.jpg"
import wishlist from "../images/wishlist.svg"
import view from "../images/view.svg"
import addcart from "../images/add-cart.svg"
import prodcompare from '../images/prodcompare.svg'

const ProductCard = (props) => {
  const { grid } = props
  let location = useLocation();
  return (
   <>
      <div
      className={` ${
        location.pathname === "/store" ? `gr-${grid}` : "col-3"
      } `}
    >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
            <img src={wish} alt="wish"/>
            </button>
          </div>
          <div className="product-image">
            <img src={tab1} className="img-fluid" alt="product images"/>
            <img src={tab} className="img-fluid" alt="product images"/>
          </div>
          <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">
                Kids headphone bulk 10 pack multi colored for students
              </h5>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
              </p>
              <p className="price">$1000.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column  gap-15">
            <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
              <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div
      className={` ${
        location.pathname === "/store" ? `gr-${grid}` : "col-3"
      } `}
    >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
            <img src={wishlist} alt="wish"/>
            </button>
          </div>
          <div className="product-image">
            <img src={tab1} className="img-fluid" alt="product images"/>
            <img src={tab} className="img-fluid" alt="product images"/>
          </div>
          <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">
                Kids headphone bulk 10 pack multi colored for students
              </h5>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
              </p>
              <p className="price">$1000.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column  gap-15">
            <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
              <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
   </>
  )
}

export default ProductCard