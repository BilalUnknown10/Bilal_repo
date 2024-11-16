import React from 'react'

function Product_card({imageUrl,descriptionImage,productName}) {
  return (
    <div>
      <div className='product_image_description'>
            <div className='product_image'>
                <img src= {imageUrl} alt="Product Image" />
            </div>
            <div className='product_description'>
                <p>{descriptionImage}</p>
            </div>
      </div>
      <div className='product_name'>
        <h1>{productName}</h1>
      </div>
    </div>
  )
}

export default Product_card
