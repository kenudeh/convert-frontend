import { Helmet } from "react-helmet";
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar'

const Contact = () => {
    return (
        <main>
            <Helmet>
                <title>Contact Us - Convert</title>
                <meta name="description" content="Get in touch with Convert for support and inquiries." />
            </Helmet>
            <NavBar />
            <section>
                <h1>Contact Us</h1>
            </section>
            <Footer />
        </main>
    );
}
 
export default Contact;