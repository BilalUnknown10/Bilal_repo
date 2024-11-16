import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Navbar from '../Components/Navbar';
import Product_card from '../Components/Product_card';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import UTurnLeftOutlinedIcon from '@mui/icons-material/UTurnLeftOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import SettingsPhoneOutlinedIcon from '@mui/icons-material/SettingsPhoneOutlined';
import Label from '../Components/Label'
import Input from '../Components/Input'
import BestSellingProducts from '../Components/BestSellingProducts';
import ConstumizedStyle from '../Components/ConstumizedStyle';
import AddIcon from '@mui/icons-material/Add';
import ClientAboutUs from '../Components/ClientAboutUs';
import WaxPaperGlobal from '../Components/WaxPaperGlobal';
import LatestArticlesBlogs from '../Components/LatestArticlesBlogs';
import Footer from '../Components/Footer';

function HomePage() {
  return (
    <div className='main_dev'>
    
    {/* Home page header section */}

    {/* Top of header section */}
        <div className='home_page_Top'>
            <h3 className='header_paragraph'>Free Shipping All Over Usa and Canada</h3>
            <div className = 'header_shopping_bag'>
              <ShoppingBagIcon style={{fontSize : '35px'}} />
              <p>11 + <br /> products</p>
            </div>
        </div>
        
        {/* Navbar section */}
        <div>
          <Navbar/>
        </div>


        {/* Home page main section */}

        <div className='main_container'>
            <div className='container'>
              <div className='first_section_container'>
                  <div className='homepage_first_section'>
                    <div className='homepage_first_section_description'>
                      <h1>Design Custom <br /> Wax Paper Products</h1>
                      <p>creat custom wax papers <br /> according to your needs <br /> in jus two easy step !</p>
                      <button>Design Custom Wax Paper</button>
                    </div>
                    <div className='first_section_image_div'>
                      <img src="./paperImage.png" alt="paper Image" />
                    </div>
                </div>
              </div>


              {/* Home page Our products section */}
              <div className='product_main_div'>
                <div className='our_product_heading'>
                  <StarRoundedIcon/>
                  <h1>Our Product</h1>
                </div>
                <div className='product_images_section'>
                  <div className='product_image_section_div'>
                    <Product_card
                      imageUrl={'./kraftPaperImage.png'}
                      descriptionImage={'When hover then show "View products'}
                      productName={'Kraft'}
                    />
                  </div>
                  <div className='product_image_section_div'>
                    <Product_card
                      imageUrl={'./kraftPaperImage.png'}
                      descriptionImage={'When hover then show "View products'}
                      productName={'Kraft'}
                    />
                  </div>
                  <div className='product_image_section_div'>
                    <Product_card
                      imageUrl={'./kraftPaperImage.png'}
                      descriptionImage={'When hover then show "View products'}
                      productName={'Kraft'}
                    />
                  </div>
                  <div className='product_image_section_div'>
                    <Product_card
                      imageUrl={'./kraftPaperImage.png'}
                      descriptionImage={'When hover then show "View products'}
                      productName={'Kraft'}
                    />
                  </div>
                  <div className='product_image_section_div'>
                    <Product_card
                      imageUrl={'./kraftPaperImage.png'}
                      descriptionImage={'When hover then show "View products'}
                      productName={'Kraft'}
                    />
                  </div>
                  <div className='product_image_section_div'>
                    <Product_card
                      imageUrl={'./kraftPaperImage.png'}
                      descriptionImage={'When hover then show "View products'}
                      productName={'Kraft'}
                    />
                  </div>
                  <div className='product_image_section_div'>
                    <Product_card
                      imageUrl={'./kraftPaperImage.png'}
                      descriptionImage={'When hover then show "View products'}
                      productName={'Kraft'}
                    />
                  </div>
                  <div className='product_image_section_div'>
                    <Product_card
                      imageUrl={'./kraftPaperImage.png'}
                      descriptionImage={'When hover then show "View products'}
                      productName={'product'}
                    />
                  </div>
                  <div className='product_image_section_div'>
                    <Product_card
                      imageUrl={'./kraftPaperImage.png'}
                      descriptionImage={'When hover then show "View products'}
                      productName={'Kraft'}
                    />
                  </div>
                  
                  
                                     
                   
                </div>
              </div>
              
              
              {/* Choose us for buying */}
              <div className='main_choose_us'>
                <div>
                  <div className='choose_us_heading'>
                    <h1>Choose Us For Buying <br />Custom Wax Papers</h1>
                  </div>
                  <div className='input_div'>
                    <input type="checkbox" checked className='checbox' />
                    <label htmlFor="">No additionl cahrges for art plates and setup</label>
                  </div>
                  <div className='input_div'>
                    <input type="checkbox" checked className='checbox' />
                    <label htmlFor="">Free shipping facility for US-based clients</label>
                  </div>
                  <div className='input_div'>
                    <input type="checkbox" checked className='checbox' />
                    <label htmlFor="">1-color,2-color or 4-color color printing</label>
                  </div>
                  <div className='input_div'>
                    <input type="checkbox" checked className='checbox' />
                    <label htmlFor="">Standard and specific sizes for papers sheets</label>
                  </div>
                  <div className='input_div'>
                    <input type="checkbox" checked className='checbox' />
                    <label htmlFor="">Availability of white and brown kraft paper</label>
                  </div>

                  <div className="choose_us_buttons">
                    <button>Design Wax Paper</button>
                    <button>Read More</button>
                  </div>
                </div>
                <div className='choose_us_image'>
                  <img src="./kraftPaperImage.png" alt="" />
                </div>
              </div>

              {/* Custom wax paper */}
              <div className='custom_wax_paper_main'>
                <div className='custom_wax_paper_image'>
                  <img src="./kraftPaperImage.png" alt="" />
                </div>
                <div className='custom_wax_paper_detail'>
                  <div className='custom_wax_heading'>
                    <h1>Custom Wax Paper</h1>
                  </div>
                  <div className='custom_wax_heading'>
                    <h3>Graseproof Paper</h3>
                  </div>
                  <div className='custom_wax_paper_para'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Magni ex dolorum voluptatibus veniam unde? Accusamus laborum, 
                      voluptas veritatis eos unde iste adipisci quam, magnam eius 
                      fugiat beatae suscipit veniam in!
                      Numquam eaque commodi ipsam eius aliquid 
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Magni ex dolorum voluptatibus veniam unde? Accusamus laborum, 
                      voluptas veritatis eos unde iste adipisci quam, magnam eius 
                      fugiat beatae suscipit veniam in!
                      Numquam eaque commodi ipsam eius aliquid 
                    </p>
                    <p>
                      <a href="">Learn more</a>
                    </p>
                  </div>
                  <div className="choose_us_buttons">
                    <button>Get a Quote</button>
                    <button>Design Wax Paper</button>
                  </div>
                  <div className='help_buttons'>
                    <div>
                      <LocalShippingOutlinedIcon/> <br />
                      <button>Free Shipping</button>
                    </div>
                    <div>
                      <UTurnLeftOutlinedIcon style={{rotate : '90deg'}}/> <br />
                      <button>30 Days Return</button>
                    </div>
                    <div>
                      <AssuredWorkloadOutlinedIcon/> <br />
                      <button>Secured Payment</button>
                    </div>
                    <div>
                      <SettingsPhoneOutlinedIcon/> <br />
                      <button>Support 24/7</button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Print Your own section */}
              <div className='print_your_own_main_div'>
                <div className='table_image'>
                  <img src="./kraftPaperImage.png" alt="" />
                </div>
                <div>
                  <div className='print_heading'>
                    <h1>Print Your Own</h1>
                  </div>
                  <div className='print_heading'>
                    <h3>Custom Papers in All sheets</h3>
                  </div>
                  <div className='table_dimensions'>
                    <h4>Dimensions</h4>
                  </div>
                  <div className='table'>
                    <table>
                      <tr>
                        <th>Dimension 4" x 4"</th>
                        <th>Dimension 6" x 6"</th>
                        <th>Dimension 8" x 8"</th>
                        <th>Dimension 10" x 10"</th>
                      </tr>
                      <tr>
                        <td>4" x 4"</td>
                        <td>6" x 6"</td>
                        <td>8" x 8"</td>
                        <td>10" x 10"</td>
                      </tr>
                      <tr>
                        <td>4" x 4"</td>
                        <td>6" x 6"</td>
                        <td>8" x 8"</td>
                        <td>10" x 10"</td>
                      </tr>
                      <tr>
                        <td>4" x 4"</td>
                        <td>6" x 6"</td>
                        <td>8" x 8"</td>
                        <td>10" x 10"</td>
                      </tr>
                      <tr>
                        <td>4" x 4"</td>
                        <td>6" x 6"</td>
                        <td>8" x 8"</td>
                        <td>10" x 10"</td>
                      </tr>
                      <tr>
                        <td>4" x 4"</td>
                        <td>6" x 6"</td>
                        <td>8" x 8"</td>
                        <td>10" x 10"</td>
                      </tr>
                      <tr>
                        <td>4" x 4"</td>
                        <td>6" x 6"</td>
                        <td>8" x 8"</td>
                        <td>10" x 10"</td>
                      </tr>
                      <tr>
                        <td>4" x 4"</td>
                        <td>6" x 6"</td>
                        <td>8" x 8"</td>
                        <td>10" x 10"</td>
                      </tr>
                    </table>
                  </div>

                  <div className="Print_Your_own_buttons">
                    <button> 10" x 10"</button>
                    <button>Submit Size</button>
                  </div>

                </div>

              </div>

              {/* Custom printed Food */}
              <div className='custom_printed_food'>
                <div className='customm_printed_heading_paragraphs'>
                    <div>
                      <h1 className='custom_food_headings'>Custom Printed Food</h1>
                    </div>
                    <div>
                     <h3 className='custom_food_headings'>Biodegradable</h3>
                      <p>show ypur commitment to show your enviroment 
                        sustainability with our eco-friendly 
                        biodegradable wax paper for your food
                        show ypur commitment to show your enviroment 
                        sustainability with our eco-friendly 
                        biodegradable wax paper for your food
                      </p>
                   </div>
                   <div>
                     <h3 className='custom_food_headings'>Custom Printed</h3>
                      <p>show ypur commitment to show your enviroment 
                        sustainability with our eco-friendly 
                        biodegradable wax paper for your food
                        show ypur commitment to show your enviroment 
                        sustainability with our eco-friendly 
                        biodegradable wax paper for your food
                      </p>
                    </div>
                    <div>
                      <h3 className='custom_food_headings'>Custom printed</h3>
                      <p>show ypur commitment to show your enviroment 
                        sustainability with our eco-friendly 
                        biodegradable wax paper for your food
                        show ypur commitment to show your enviroment 
                        sustainability with our eco-friendly 
                        biodegradable wax paper for your food
                      </p>
                    </div>
                    <div className='custom_food_buttons'>
                      <button>Get a Quote</button>
                      <button>Design Wax Paper</button>
                    </div>
                </div>
                 <div className='custom_printed_food_Image'>
                  <div>
                    <img src="./kraftPaperImage.png" alt="" />
                  </div>
                   <div>
                    <img src="./kraftPaperImage.png" alt="" />
                  </div>
                  <div>
                    <img src="./kraftPaperImage.png" alt="" />
                  </div>
                  <div>
                    <img src="./kraftPaperImage.png" alt="" />
                  </div>
                </div>
              </div>

              {/* Quotation section */}
              <div className="quotation_section_div">
                <div className="quotation_form_main">
                  <div className='quotation_heading'>
                    <h1>Quotation</h1>
                    <h3>Get an instant Quote</h3>
                  </div>
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

              {/* Best selling products section */}
              <div>
                <BestSellingProducts/>
                <div className='Customized_style_main_div'>
                  <ConstumizedStyle/>
                  <ConstumizedStyle/>
                  <ConstumizedStyle/>
                  <ConstumizedStyle/>
                </div>
              </div>

              <div className='after_customized_style'>
                <h1>Custom Wrax Papers-Your Trustworthy Ally for high quality wax sheet</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos a itaque explicabo iure ex, nihil ipsa modi autem placeat pariatur possimus officia quos ipsam, dolor quidem tenetur unde perspiciatis.
                  Eos corporis dignissimos minima tenetur? Quam error
                  </p>
                   <h1>Custom Wrax Papers-Your Trustworthy Ally for high quality wax sheet</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos a itaque explicabo iure ex, nihil ipsa modi autem placeat pariatur possimus officia quos ipsam, dolor quidem tenetur unde perspiciatis.
                  Eos corporis dignissimos minima tenetur? Quam error
                  </p>
                   <h1>Custom Wrax Papers-Your Trustworthy Ally for high quality wax sheet</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos a itaque explicabo iure ex, nihil ipsa modi autem placeat pariatur possimus officia quos ipsam, dolor quidem tenetur unde perspiciatis.
                  Eos corporis dignissimos minima tenetur? Quam error
                  </p>
                   <h1>Custom Wrax Papers-Your Trustworthy Ally for high quality wax sheet</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos a itaque explicabo iure ex, nihil ipsa modi autem placeat pariatur possimus officia quos ipsam, dolor quidem tenetur unde perspiciatis.
                  Eos corporis dignissimos minima tenetur? Quam error
                  </p>
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

              {/* What out Client sy about us */}
                <div className='client_about_us'>
                  <ClientAboutUs/>
                </div>

                {/* Wex Papaer global */}
                <div className='wax_paper_global'>
                  <WaxPaperGlobal/>
                  <div className='goole_map'>
                    <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
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
        </div>
      
    </div>
  )
}

export default HomePage
