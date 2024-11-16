import React from 'react'
import Product_card from './Product_card'
import SellinProducts from './SellinProducts'

function BestSellingProducts() {
  return (
    <div className='best_selling_products_section'>
    <div className='best_selling_heading'>
        <h1>Best Selling Products</h1>
    </div>
      <div className='selling_Products_images_container'>
        <div className='best_selling_Products_left'>
        <SellinProducts
            imageUrl={'./kraftPaperImage.png'}
            heading={'Custom Wax paper'}
            btn_text={"Read More"}
        />
        <SellinProducts
            imageUrl={'./kraftPaperImage.png'}
            heading={'Custom Wax paper'}
            btn_text={"Read More"}
        />
        <SellinProducts
            imageUrl={'./kraftPaperImage.png'}
            heading={'Custom Wax paper'}
            btn_text={"Read More"}
        />
        <SellinProducts
            imageUrl={'./kraftPaperImage.png'}
            heading={'Custom Wax paper'}
            btn_text={"Read More"}
        />
        </div>
        <div className='best_selling_Products_right'>
            <div className='best_selling_Products_right_image' >
                <img src="./kraftPaperImage.png" alt="" />
            </div>
            <div className='best_selling_Products_right_heading'>
                <h2>Custom Wax Paper</h2>
            </div>
            <div className='best_selling_Products_right_button'>
                <button>Read More</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BestSellingProducts
