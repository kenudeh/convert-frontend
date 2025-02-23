import {MdLocationOn} from 'react-icons/md';
import {BsFillTelephoneInboundFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {BiLogoFacebook} from 'react-icons/bi';
import {BiLogoTwitter} from 'react-icons/bi';
import {BiLogoTiktok} from 'react-icons/bi';
import logo from '../../Images/logo.png';
import './Footer.css';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <main className="Footer">
            <section className='footer1'>
                <section className='logo'>
                    <Link to='/'><img src={logo} alt='brand logo'/></Link>
                    <p>Seamless Transfers</p>
                </section>
                <section className='ourservices'>
                    <p><span>Our Services</span></p>
                    <ul>
                        <li><Link to='/services/sell-airtime'>Sell Airtime</Link></li>
                        <li><Link to='/services/buy-airtime'>Buy Airtime</Link></li>
                        <li><Link to='/services/buy-data'>Buy Data</Link></li>
                        <li><Link to='/services/bill-payment'>Bill Payment</Link></li>
                    </ul>
                </section>

                <section className='explore'>
                    <p><span>Explore</span></p>
                    <ul>
                        <li><a href='https://docs.convert.com.ng/guides/faqs' target='_blank' rel='noopener noreferrer'>FAQs</a></li>
                        <li><a href='https://docs.convert.com.ng' target='_blank' rel='noopener noreferrer'>Docs</a></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        
                    </ul>
                </section>
                <section className='letstalk'>
                    <span>Let's Talk</span>
                    <p>Get in touch with our support team</p>
                    <Link to='/contact' className='button'>
                        <button>CONTACT US</button>
                    </Link>
                </section>
            </section>

            <section className='footer2'>
                    <section className='location'>
                      <MdLocationOn style={{color:'white', height:'2rem', width:'4rem'}}/>
                        <div className='wrap'>
                            <span>Address</span>
                            <p>43 Arthur Eze Avenue, Awka,</p>
                            <p>Anambra State</p>
                        </div>
                    </section>
                    <section className='phone'>
                        <BsFillTelephoneInboundFill style={{color:'white', height:'1.5rem', width:'3rem'}}/>
                        <div className='wrap'>
                            <span>Phone</span>
                            <p>081 596 7890</p>
                            <p>081 904 7890</p>
                        </div>
                    </section>
                    <section className='email'>
                        <div><AiOutlineMail style={{color:'white', height:'2rem', width:'4rem'}}/></div>
                        <div className='wrap'>
                            <span>Email</span>
                            <p>support@convert.com.ng</p>
                        </div>
                    </section>
                    <section className='socialmedia'>
                        <span>We're Social</span>
                        <div className='wrap'>
                            <div><a href='https://fb.com/convertng' target='_blank' rel='noopener noreferrer'><BiLogoFacebook style={{color:'white', height:'1.2rem', width:'1.2rem', cursor:'pointer'}}/></a></div>
                            <div><a href='https://x.com/convertng' target='_blank' rel='noopener noreferrer'><BiLogoTwitter style={{color:'white', height:'1.2rem', width:'1.2rem', cursor:'pointer'}}/></a></div>
                            <div><a href='https://tiktok.com/convertng' target='_blank' rel='noopener noreferrer'><BiLogoTiktok style={{color:'white', height:'1.2rem', width:'1.2rem', cursor:'pointer'}}/></a></div>
                        </div>
                    </section>
                   
            </section>

            <hr></hr>

            <section className='footer3'>
                <div className='privacy'>
                    <p><Link to='/privacy'>Privacy Policy</Link></p>
                    <p><Link to='/terms-of-service'>Terms of Service</Link></p>
                </div>
                <p>copyright &copy; 2025 IdeasRocket</p>
            </section>
        </main>
    )
}
 
export default Footer;