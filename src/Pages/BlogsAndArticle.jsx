import React from 'react'
import Navbar from '../Components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Blog_article_page from '../Components/Blog_article_page';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from '../Components/Footer';

function BlogsAndArticle() {
  return (
    <>
    <Navbar/>
    <div className='our_blogs_article_page'>
        <div className='our_blogs_article_heading'>
            <h1>Our Blogs & Articles</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Incidunt expedita, nam esse veniam omnis amet quas. Laboriosam rem iusto omnis eaque quo ducimus. Dicta ipsa, 
            non libero commodi veritatis voluptatibus.
            Fugiat corrupti hic, praesentium iste dicta inventore ipsa 
            earum maiores odit, laudantium velit autem rem, facilis exercitationem 
            quis illum temporibus ea quia </p>
        </div>
        <div className='blog_search'>
            <div className='Blog_input'>
                <input type="text" placeholder='Serach' />
                <SearchIcon style={{fontSize : '33px', background:"orange"}}/>
            </div>
        </div>
        <div className='blog_article_navbar'>
            <li>All Catogeries</li>
            <li>Custom Tissues</li>
            <li>Simple Paper</li>
            <li>Wax Paper</li>
            <li><ArrowRightAltIcon style={{background : "orange", borderRadius : '10px', marginTop:"10px"}}/></li>
        </div>
        <div className='article_blog_first_section'>
            <div className='article_blog_ist_image'>
                <img src="./kraftPaperImage.png" alt="" />
            </div>
            <div className='article_blog_first_section_description'>
                <div>
                    <button>Custom Tissue Paper</button>
                </div>
                <h1>How To Design Custom Wax Paper According to The Clients
                Requirements and deliver the product</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Incidunt expedita, nam esse veniam omnis amet quas. Laboriosam rem iusto omnis eaque quo ducimus. Dicta ipsa, 
                    non libero commodi veritatis voluptatibus.
                    Fugiat corrupti hic, praesentium iste dicta inventore ipsa 
                    earum maiores odit, laudantium velit autem rem, facilis exercitationem 
                    quis illum temporibus ea quia
                </p>
                <button className='read_more_btn'>Read More</button>
            </div>
        </div>
       <div className='article_blog_second_section'>
         <div className='article_blog_second_section_image'>
            <div>
                <Blog_article_page
                     imageUrl={'./kraftPaperImage.png'}
                    heading={'How To Provide Team Insights'}
                    paragraph={"Lorem ipsum solor sit ammit consectur adipicsing slit se do Lorem ipsum solor sit ammit consectur adipicsing slit se do"}
                    btn_text={'Read More'}
                />
            </div>
            <div>
                <Blog_article_page
                     imageUrl={'./kraftPaperImage.png'}
                    heading={'How To Provide Team Insights'}
                    paragraph={"Lorem ipsum solor sit ammit consectur adipicsing slit se do Lorem ipsum solor sit ammit consectur adipicsing slit se do"}
                    btn_text={'Read More'}
                />
            </div>
            <div>
                <Blog_article_page
                     imageUrl={'./kraftPaperImage.png'}
                    heading={'How To Provide Team Insights'}
                    paragraph={"Lorem ipsum solor sit ammit consectur adipicsing slit se do Lorem ipsum solor sit ammit consectur adipicsing slit se do"}
                    btn_text={'Read More'}
                />
            </div>
            <div>
                <Blog_article_page
                     imageUrl={'./kraftPaperImage.png'}
                    heading={'How To Provide Team Insights'}
                    paragraph={"Lorem ipsum solor sit ammit consectur adipicsing slit se do Lorem ipsum solor sit ammit consectur adipicsing slit se do"}
                    btn_text={'Read More'}
                />
            </div>
            <div>
                <Blog_article_page
                     imageUrl={'./kraftPaperImage.png'}
                    heading={'How To Provide Team Insights'}
                    paragraph={"Lorem ipsum solor sit ammit consectur adipicsing slit se do Lorem ipsum solor sit ammit consectur adipicsing slit se do"}
                    btn_text={'Read More'}
                />
            </div>
            <div>
                <Blog_article_page
                     imageUrl={'./kraftPaperImage.png'}
                    heading={'How To Provide Team Insights'}
                    paragraph={"Lorem ipsum solor sit ammit consectur adipicsing slit se do Lorem ipsum solor sit ammit consectur adipicsing slit se do"}
                    btn_text={'Read More'}
                />
            </div>
        </div>
        <div className='related_post_tags'>
            <div className='related_post'>
                <h2>Realted Post</h2>
                <div className='related_post_container'>
                    <div className='relate_post_image'>
                        <img src="./kraftPaperImage.png" alt="" />
                    </div>
                    <div className='relate_post_description'>
                        <p>Wax paper</p>
                        <h3>How to Design Custom Wax Paper</h3>
                    </div>
                </div>
                <div className='related_post_container'>
                    <div className='relate_post_image'>
                        <img src="./kraftPaperImage.png" alt="" />
                    </div>
                    <div className='relate_post_description'>
                        <p>Wax paper</p>
                        <h3>How to Design Custom Wax Paper</h3>
                    </div>
                </div>
                <div className='related_post_container'>
                    <div className='relate_post_image'>
                        <img src="./kraftPaperImage.png" alt="" />
                    </div>
                    <div className='relate_post_description'>
                        <p>Wax paper</p>
                        <h3>How to Design Custom Wax Paper</h3>
                    </div>
                </div>
                <div className='related_post_container'>
                    <div className='relate_post_image'>
                        <img src="./kraftPaperImage.png" alt="" />
                    </div>
                    <div className='relate_post_description'>
                        <p>Wax paper</p>
                        <h3>How to Design Custom Wax Paper</h3>
                    </div>
                </div>
            </div>
            <div className="related_tag">
                <h2>Tags</h2>
                <div className="related_tage_inner">
                    <p>paper</p>
                    <p>Custom wax paper</p>
                </div>
                <div className="related_tage_inner">
                    <p>paper</p>
                    <p>Custom wax paper</p>
                </div>
                <div className="related_tage_inner">
                    <p>paper</p>
                    <p>Custom wax paper</p>
                </div>
                <div className="related_tage_inner">
                    <p>paper</p>
                    <p>Custom wax paper</p>
                </div>
            </div>
            <div className="related_social">
                <h3>Social Media</h3>
                <div>
                    <FacebookIcon style={{color:'black'}} className='icon'/>
                    <TwitterIcon style={{color:'black'}} className='icon'/>
                    <InstagramIcon style={{color:'black'}} className='icon'/>
                    <LinkedInIcon style={{color:'black'}} className='icon'/>
                </div>
            </div>
        </div>
       </div>
    </div>
    <Footer/>
      
    </>
  )
}

export default BlogsAndArticle
