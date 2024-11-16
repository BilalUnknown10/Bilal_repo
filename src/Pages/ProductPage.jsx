import React from 'react'
import Navbar from '../Components/Navbar'
import Label from '../Components/Label'
import Input from '../Components/Input'
import AddIcon from '@mui/icons-material/Add';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import UTurnLeftOutlinedIcon from '@mui/icons-material/UTurnLeftOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import SettingsPhoneOutlinedIcon from '@mui/icons-material/SettingsPhoneOutlined';
import SellinProducts from '../Components/SellinProducts'
import LatestArticlesBlogs from '../Components/LatestArticlesBlogs';
import Footer from '../Components/Footer';

function ProductPage() {
  return (
    <>
    <Navbar/>
    <div className="product_page_main_div">
    {/* section 1 */}
         <div className='product_page_tissue_paper'>
            <div>
                <h1>Custom Printed Tissue Paper</h1>
            </div>
            <div className='Product_top_button'>
                <button>Design Custom printed tissue paper</button>
            </div>
        </div>
        <div className="product_page_image_form">
            <div className=' product_left_all_image'>
                <div className='product_left_image'>
                    <img src="./kraftPaperImage.png" alt="" />
                </div>
                <div className='product_small_images'>
                    <img src="./kraftPaperImage.png" alt="" />
                    <img src="./kraftPaperImage.png" alt="" />
                    <img src="./kraftPaperImage.png" alt="" />
                    <img src="./kraftPaperImage.png" alt="" />
                </div>
            </div>
            <div className="quotation_section_div">
                <div className="quotation_form_main">
                  <div className='quotation_form'>
                    <form action="">
                      <div className='form_input'>
                        <Label label={'Name'}/>
                        <Input
                          type={'text'}
                        />
                      </div>
                       <div className='form_input'>
                        <Label label={'Email'}/>
                        <Input
                          type={'email'}
                        />
                      </div>
                       <div className='form_input'>
                        <Label label={'Phone Number'}/>
                        <Input
                          type={'number'}
                        />
                      </div>
                      <div className='form_input'>
                        <Label htmlFor={'choose'} label={'Size Unit'}/>
                        <select className="choose" id="choose"></select>
                      </div>
                      <div className='length_width_inputs'>
                        <div>
                          <Label label={'Length'}/>
                          <input type="text" />
                        </div>
                        <div>
                          <Label label={'width'}/>
                          <input type="text" />
                        </div>
                      </div>
                      <div className='form_input'>
                        <Label htmlFor={'choose'} label={'Select Color Print'}/>
                        <select className="choose" id="choose"></select>
                      </div>
                      <div className='form_input'>
                        <Label htmlFor={'choose'} label={'Select Shipping Options'}/>
                        <select className="choose" id="choose"></select>
                      </div>
                      <div className='form_input'>
                        <Label label={'Quantity'}/>
                        <Input
                          type={'number'}
                        />
                      </div>
                      <div className='form_textarea'>
                        <Label label={'Other Requirments'}/>
                        <textarea name="" id=""></textarea>
                      </div>
                      <div className='form_input'>
                        <Label label={'Upload Prototype/ Simple you have'}/>
                        <Input
                          type={'file'}
                        />
                      </div>
                      <div className='form_input_checkbox'>
                        <div>
                          <input type="checkbox" />
                          <p>I am not Robot</p>
                          <img src="./captcha.png" alt="" />
                        </div>
                      </div>
                      
                      
                      
                      
                    </form>
                  </div>
                </div>
              </div>
        </div>
        <div className='help_buttons_product'>
                    <div>
                      <LocalShippingOutlinedIcon style={{color:'rgb(206, 134, 0)'}}/> <br />
                      <button>Free Shipping</button>
                    </div>
                    <div>
                      <UTurnLeftOutlinedIcon style={{rotate : '90deg', color:'rgb(206, 134, 0)'}}/> <br />
                      <button>30 Days Return</button>
                    </div>
                    <div>
                      <AssuredWorkloadOutlinedIcon style={{color:'rgb(206, 134, 0)'}}/> <br />
                      <button>Secured Payment</button>
                    </div>
                    <div>
                      <SettingsPhoneOutlinedIcon style={{color:'rgb(206, 134, 0)'}} /> <br />
                      <button>Support 24/7</button>
                    </div>
        </div>

          {/* Section 2 */}
        <div className='product_section2_main'>
          <div className='product_section2_image'>
            <img src="./kraftPaperImage.png" alt="" />
          </div>
          <div className='product_section2_description'>
            <h1>Printed Tissue Paper</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat deleniti quidem harum placeat, in molestias facilis libero natus culpa sit autem ipsam illum dolor sunt blanditiis voluptatem reprehenderit laboriosam.
              Eum explicabo eaque ipsa accusantium aliquam ex hic quia qui expedita voluptate, dolores nulla nostrum voluptates tempore iste sapiente quod voluptatum illo corporis fugit? Aperiam minus at temporibus officiis possimus.
              Quidem, commodi magnam, similique quaerat asperiores qui eaque sit molestiae ipsam recusandae expedita quisquam. Voluptatibus dolore esse velit quidem dicta error aspernatur, quod, amet et quos, eius tempore nesciunt quaerat.
            </p>
          </div>
        </div>
        <div className='product_section2_main main2'>
          <div className='product_section2_description'>
            <h1>Printed Tissue Paper</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat deleniti quidem harum placeat, in molestias facilis libero natus culpa sit autem ipsam illum dolor sunt blanditiis voluptatem reprehenderit laboriosam.
              Eum explicabo eaque ipsa accusantium aliquam ex hic quia qui expedita voluptate, dolores nulla nostrum voluptates tempore iste sapiente quod voluptatum illo corporis fugit? Aperiam minus at temporibus officiis possimus.
              Quidem, commodi magnam, similique quaerat asperiores qui eaque sit molestiae ipsam recusandae expedita quisquam. Voluptatibus dolore esse velit quidem dicta error aspernatur, quod, amet et quos, eius tempore nesciunt quaerat.
            </p>
          </div>
          <div className='product_section2_image'>
            <img src="./kraftPaperImage.png" alt="" />
          </div>
        </div>
        <div className='product_section2_main'>
          <div className='product_section2_image'>
            <img src="./kraftPaperImage.png" alt="" />
          </div>
          <div className='product_section2_description'>
            <h1>Printed Tissue Paper</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat deleniti quidem harum placeat, in molestias facilis libero natus culpa sit autem ipsam illum dolor sunt blanditiis voluptatem reprehenderit laboriosam.
              Eum explicabo eaque ipsa accusantium aliquam ex hic quia qui expedita voluptate, dolores nulla nostrum voluptates tempore iste sapiente quod voluptatum illo corporis fugit? Aperiam minus at temporibus officiis possimus.
              Quidem, commodi magnam, similique quaerat asperiores qui eaque sit molestiae ipsam recusandae expedita quisquam. Voluptatibus dolore esse velit quidem dicta error aspernatur, quod, amet et quos, eius tempore nesciunt quaerat.
            </p>
          </div>
        </div>

        {/* Table product */}
        <div className='product_table'>
          <h1>Paper Roll specification</h1>
          <table>
            <tr>
              <th>Sustainability</th>
              <th>Recyclable</th>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>More than 20 thosand</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>More than 20 thosand</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>More than 20 thosand</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>More than 20 thosand</td>
            </tr>
          </table>
        </div>

        {/* Table and Image */}
        <div className='table_and_image_product'>
          <div className='product_section2_image'>
            <img src="./kraftPaperImage.png" alt="" />
          </div>
          <div className='image_table_product'>
            <h1>Dimensions</h1>
            <table>
              <tr>
                <th>Dimesion 4" x4"</th>
                <th>Dimesion 6" x6"</th>
                <th>Dimesion 8" x8"</th>
                <th>Dimesion 10" x10"</th>
              </tr>
              <tr>
                <td>4" x4"</td>
                <td>6" x6"</td>
                <td>8" x8"</td>
                <td>10" x10"</td>
              </tr>
              <tr>
                <td>4" x4"</td>
                <td>6" x6"</td>
                <td>8" x8"</td>
                <td>10" x10"</td>
              </tr>
              <tr>
                <td>4" x4"</td>
                <td>6" x6"</td>
                <td>8" x8"</td>
                <td>10" x10"</td>
              </tr>
              <tr>
                <td>4" x4"</td>
                <td>6" x6"</td>
                <td>8" x8"</td>
                <td>10" x10"</td>
              </tr>
              <tr>
                <td>4" x4"</td>
                <td>6" x6"</td>
                <td>8" x8"</td>
                <td>10" x10"</td>
              </tr>
              <tr>
                <td>4" x4"</td>
                <td>6" x6"</td>
                <td>8" x8"</td>
                <td>10" x10"</td>
              </tr>
              <tr>
                <td>4" x4"</td>
                <td>6" x6"</td>
                <td>8" x8"</td>
                <td>10" x10"</td>
              </tr>
            </table>
          </div>
        </div>

         {/* Frequently asked questions */}
         <div className='frequently_asked_question_section'>
                <div className='frequently_asked_question_container'>
                  <div className='frequently_left_right'>
                    <p>
                      Create custom wax papers According to your needed needs in just
                      2 easy steps !
                    </p>
                    <h1>Frequently Asked Questions</h1>
                    <button>Ask another Question</button>
                    <button>Get a Quote</button>
                  </div>
                  <div className='frequently_left_right'>
                    <div className='frequently_paga_icon'>
                      <p>where I can Buy wax paper ?</p>
                      <AddIcon/>
                    </div>
                    <div className='frequently_paga_icon'>
                      <p>where I can Buy wax paper ?</p>
                      <AddIcon/>
                    </div>
                    <div className='frequently_paga_icon'>
                      <p>where I can Buy wax paper ?</p>
                      <AddIcon/>
                    </div>
                    <div className='frequently_paga_icon'>
                      <p>where I can Buy wax paper ?</p>
                      <AddIcon/>
                    </div><div className='frequently_paga_icon'>
                      <p>where I can Buy wax paper ?</p>
                      <AddIcon/>
                    </div>
                    <div className='frequently_paga_icon'>
                      <p>where I can Buy wax paper ?</p>
                      <AddIcon/>
                    </div>
                    <div className='frequently_paga_icon'>
                      <p>where I can Buy wax paper ?</p>
                      <AddIcon/>
                    </div>
                  </div>
                </div>
         </div>

          {/* Best related products section */}
           <div className='best_selling_heading'>
            <h1>Related Products</h1>
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

      {/* Latest Ariticles and Blogs */}
       <div className='latest_article_blogs'>
                  <div className='latest_article_heading'>
                    <h1>Latest Articles and Blogs</h1>
                  </div>
                  <div className='image_section_article_blog'>
                    <div>
                      <LatestArticlesBlogs
                        imageUrl={'./kraftPaperImage.png'}
                        BlogsImageHeading={'How to provide team insights'}
                        BlogsParagraph={'lorem ipsum dolor sit ammit consectur adipicing alit sed do'}
                      />
                      <LatestArticlesBlogs
                        imageUrl={'./kraftPaperImage.png'}
                        BlogsImageHeading={'How to provide team insights'}
                        BlogsParagraph={'lorem ipsum dolor sit ammit consectur adipicing alit sed do'}
                      />
                    </div>
                    <div className='blog_article_right_image'>
                      <img src="./kraftPaperImage.png" alt="" />
                    </div>
                  </div>
       </div>
    </div>
    <Footer/>
      
    </>
  )
}

export default ProductPage
