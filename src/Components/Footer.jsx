import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div>
      <div className='footer_main_container'>
        <div className='footer_container'>
            <div>
                <div>
                    <h1>Wax Paper</h1>
                    <p>
                        We are an experienced custom paper printing company working in 
                        working in collabration with the leading brands globally with 
                        beautiful designs and the best quality we manufacture greatness
                    </p>
                </div>
                
            </div>
            <div className='footer_last_div'>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Get a Quote</li>
                <li>Our Product</li>
                <li>Privacy Policy</li>
                <li>User Guide</li>
                <li>Terms and Condition</li>
            </div>
            <div className='footer_last_div'>
                <li>888-836-3696</li>
                <li>saleswaxpapers.net</li>
                <li>285 NOSTRAND</li>
                <li>AVE UNIT #120</li>
                <li>BROOKLYN, NY 11216</li>
            </div>
        </div>
        <div className='footer_follow'>
                    <h1>Follow</h1>
                    <div>
                        <div className="links">
                            <FacebookIcon style={{color:'orange'}} className='icon'/>
                            <TwitterIcon style={{color:'orange'}} className='icon'/>
                            <InstagramIcon style={{color:'orange'}} className='icon'/>
                            <LinkedInIcon style={{color:'orange'}} className='icon'/>
                        </div>
                    </div>
                </div>
        <div className='footer_button'>
            <button>Get a Quote</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
