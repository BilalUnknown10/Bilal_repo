import React from 'react'

function SellinProducts({imageUrl, heading, btn_text}) {
  return (
    <div className='selling_product_container'>
      <div className='selling_product_Image'>
        <img src={imageUrl} alt="" />
      </div>
      <div className='selling_product_heading'>
        <h2>
            {heading}
        </h2>
      </div>
      <div className='selling_product_button'>
        <button>{btn_text}</button>
      </div>
    </div>
  )
}

export default SellinProducts
