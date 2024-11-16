import React from 'react'
import Navbar from '../Components/Navbar'
import Label from '../Components/Label'
import Input from '../Components/Input'
import WaxPaperGlobal from '../Components/WaxPaperGlobal'
import Footer from '../Components/Footer'

function ContactUs() {
  return (
    <>
    <Navbar/>
    <div className='contact_us_page_main_div'>
        <div className='contact_us_main_container'>
            <div className="contact_support">
                <h1>Contact & Support</h1>
                <p>lorem ipsum dolor sit ammit consectur adipiscing elit, sed do eimoused tempor incident ut lobore et dolo</p>
            </div>
            <div className='contact_us_second_section'>
                <div>
                    <div className='contact_form_contact_us'>
                    <h2>contact with our team</h2>
                    <form action="">
                        <div className='form_inputs_contact'>
                            <div>
                                <Label label={'Name'}/>
                            <Input
                                 type={'text'}
                            />
                            </div>
                            <div>
                                <Label label={'Last Name'}/>
                            <Input
                                 type={'text'}
                            />
                            </div>
                        </div>
                        <div className='form_input_contactPage'>
                            <Label label={'Email'}/>
                            <Input
                                type={"email"}
                            />
                        </div>
                         <div className='form_input_contactPage'>
                            <Label label={'Phone Number'}/>
                            <Input
                                type={"number"}
                            />
                        </div>
                        <div className='form_input_contactPage'>
                            <Label label={'Order'}/>
                            <select className="choose" id="choose"></select>
                        </div>
                        <div className='form_input_contactPage'>
                            <Label label={'Location'}/>
                            <select className="choose" id="choose">
                                <option value="">Australia</option>
                                <option value="">Pakistan</option>
                            </select>
                        </div>
                        <div className='contact_page_textarea form_input_contactPage'>
                            <Label label={'Message'}/>
                            <textarea name="" id="" rows={'8'}></textarea>
                        </div>
                    </form>
                    <div>
                        <h2>Which product are you instrested in?</h2>
                    </div>
                    <div className='All_chechkboxes_contact_us'>
                        <div className='checkbox_first_contact_us'>
                            <div className='first_three_checkbox'>
                                <input type="checkbox" />
                                <p>Custom Wax Paper</p>
                            </div>
                            <div className='first_three_checkbox'>
                                <input type="checkbox" />
                                <p>Custom Wax Paper</p>
                            </div>
                            <div className='first_three_checkbox'>
                                <input type="checkbox" />
                                <p>Custom Wax Paper</p>
                            </div>
                        </div>
                        <div className='checkbox_first_contact_us'>
                            <div className='first_three_checkbox'>
                                <input type="checkbox" />
                                <p>Custom Wax Paper</p>
                            </div>
                            <div className='first_three_checkbox'>
                                <input type="checkbox" />
                                <p>Custom Wax Paper</p>
                            </div>
                            <div className='first_three_checkbox'>
                                <input type="checkbox" />
                                <p>Custom Wax Paper</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact_us_page_form_button'>
                        <button >Send Message</button>
                    </div>
                </div>
                </div>
                <div className='contact_us_right_section'>
                    <div className='contact_us_right_section_desc'>
                        <h2>Chats to Sales</h2>
                        <p>lorem ipsum dolor sit ammit adipiscing</p>
                        <p><b>sales@company.com</b></p>
                    </div>
                    <div className='contact_us_right_section_desc'>
                        <h2>Email Support</h2>
                        <p>lorem ipsum dolor sit ammit adipiscing</p>
                        <p><b>sales@company.com</b></p>
                    </div>
                    <div className='contact_us_right_section_desc'>
                        <h2>Chats Support</h2>
                        <p>lorem ipsum dolor sit ammit adipiscing</p>
                        <p><b>sales@company.com</b></p>
                    </div>
                    <div className='contact_us_right_section_desc'>
                        <h2>Call to Us</h2>
                        <p>lorem ipsum dolor sit ammit adipiscing</p>
                        <p><b>sales@company.com</b></p>
                    </div>
                    <div className='contact_us_right_section_desc'>
                        <h2>Adelaide</h2>
                        <p>lorem ipsum dolor sit ammit adipiscing</p>
                        <p><b>sales@company.com</b></p>
                    </div>
                </div>
            </div>
            <div className='wax_paper_global'>
                  <WaxPaperGlobal/>
                  <div className='goole_map'>
                    <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                  </div>
                </div>
        </div>
    </div>
    <Footer/>
      
    </>
  )
}

export default ContactUs
