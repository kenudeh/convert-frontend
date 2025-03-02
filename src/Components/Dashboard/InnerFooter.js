import { Link } from "react-router-dom"
import './Styles/Base.css';

const InnerFooter = () => {
    return(
        <main>
            <footer className='footer'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='https://docs.convert.com.ng/guides/faqs' target='_blank' rel='noopener noreferrer'>FAQs</Link></li>
                    <li><Link to='https://docs.convert.com.ng' target='_blank' rel='noopener noreferrer'>Resources</Link></li>
                </ul>
            </footer>
        </main>
    )
}


export default InnerFooter;