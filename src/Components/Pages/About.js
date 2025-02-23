import { Helmet } from "react-helmet"
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';


const About = () => {
    return(
        <main>
            <Helmet>
                <title>About - Convert</title>
                <meta name="description" content="Learn about who we are and why we built convert"/>
            </Helmet>
            <NavBar />
            <article>
                <p>
                    Selling airtime in Nigeria has long been plagued by high charges, complicated registration processes, payment delays, and even scams. That's why we created Convert.com.ng, a platform designed to make the process faster, simpler, and more secure.
                    With Convert, you now have a cost-effective solution for selling airtime from any major network provider in Nigeria. There is no app to install, and no complicated registration to deal with—just sign up and start selling airtime!
                </p>
            </article>
            <Footer />
        </main>
    )
}
   
export default About;
   