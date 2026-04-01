import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from '../MyComponent.module.css'

import blackops7 from '../images/blackops7.jpg'
import fc26 from '../images/fc26.webp'
import gta6 from '../images/gta6.jpg'
import ps5prwallpaper2 from '../images/ps5prowallpaper2.webp'
import psplus from '../images/psplus.png'

const Getgadget = () => {

  // State variables
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const img_url = "https://mathiasoryx.alwaysdata.net/static/images/"

  // Fetch products
  const getProducts = async () => {
    setLoading("Please wait as we retrieve products...")

    try {
      const response = await axios.get("https://mathiasoryx.alwaysdata.net/api/get_product_details")

      setProducts(response.data)
      setFilteredProducts(response.data)

      // Extract unique categories
      const uniqueCategories = ["All", ...new Set(
        response.data
          .map(item => item.product_category)
          .filter(cat => cat && cat.trim() !== "")
      )]

      setCategories(uniqueCategories)

      setLoading("")
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  // Filter products by category
  const filterByCategory = (category) => {
    setSelectedCategory(category)

    if (category === "All") {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(
        product => product.product_category === category
      )
      setFilteredProducts(filtered)
    }
  }

  return (
    <div>

      

 {/* Carousel section */}
          <section className="row">
            <div classNameName="col-md-12">
                {/* My carousel starts here */}
                <div className="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    {/* image wrapper */}
                     <div className="carousel-inner">
                        <div className="carousel-item active"><img src={blackops7} alt="" className="d-block w-100" height="90%"/></div>

                        <div className="carousel-item"><img src={fc26} alt="" className="d-block w-100" height="90%"/></div>

                        <div className="carousel-item">
                          <img src={gta6} alt="" className="d-block w-100" height="90%"/>
                        </div>

                        <div className="carousel-item">
                          <img src={ps5prwallpaper2} alt="" className="d-block w-100" height="90%"/>
                        </div>

                        <div className="carousel-item">
                          <img src={psplus} alt="" className="d-block w-100" height="90%"/>
                        </div>
                     </div>

                     {/* controllers */}
                      <div>
                        <a href="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-danger"></span>
                        </a>
                        <a href="#mycarousel" className="carousel-control-next" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-danger"></span>
                        </a>
                      </div>
                </div>
            </div>
         </section>

      {/* CATEGORY FILTER BUTTONS */}
      <div className="row mt-4">

        {categories.map((cat, index) => (
          <div className="col-md-2 mb-2" key={index}>
            <button
              className={`btn w-100 ${selectedCategory === cat ? "btn-danger" : "btn-outline-dark"}`}
              onClick={() => filterByCategory(cat)}
            >
              {cat}
            </button>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className='row mt-4'>
        <h3>Available products</h3>

        {loading}
        {error}

        {filteredProducts.map((product) => (
          <div className='col-md-3 mb-4' key={product.product_id}>
            <div className='card shadow p-3'>
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className='product_img'
              />

              <div className='card-body'>
                <h5>{product.product_name}</h5>

                {/* CATEGORY DISPLAY */}
                <span className="badge bg-secondary mb-2">
                  {product.product_category || "Uncategorized"}
                </span>

                <p className='text-muted'>{product.product_description}</p>

                <b className='text-danger'>KES {product.product_cost}</b>

                <button
                  className='btn btn-dark mt-2 w-100'
                  onClick={() => navigate("/mpesapayement", { state: { product } })}
                >
                  Purchase now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Getgadget