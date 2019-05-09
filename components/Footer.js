import Link from 'next/link';

const Footer = () => (
  
  <footer className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-3 col-12">
                <ul style={{listStyle: 'none'}} className="contact">
                    <h4>Tryte</h4>
                    <hr></hr>
                    <li>12th Residential College,</li>
                    <li>50603 Kuala Lumpur, Malaysia</li>
                    <li><a href="mailto:trytehelp@gmail.com">trytehelp@gmail.com</a></li>
                    <li>+60175561614</li>

                </ul>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2 col-12">
                <ul style={{listStyle: 'none'}}>
                    <h4>Us</h4>
                    <hr></hr>
                    <li><a href="pages/team.html">Our Team</a></li>
                    <li><a href="pages/how.html">How it Works?</a></li>
                    <li><a href="pages/faq.html">FAQs</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-12">
                <ul style={{listStyle: 'none'}}>
                    <h4>Social</h4>
                    <hr></hr>
                    <li><a href="https://www.twitter.com/expenseeapp">Twitter</a></li>
                    <li><a href="https://www.facebook.com/ali.app.353">Facebook</a></li>
                    <li><a href="pages/contact.html">Get in Touch</a></li>
                </ul>
            </div>
            <div className="col-lg-2"></div>
        <style jsx>
        {` 

footer {
    padding: 65px 0px;
    font-weight: 600;
    margin-top: 80px;
    margin-left: 0px;
    margin-right: 0px;
    background-color: #f9f9f5;
    bottom: 0;
    width: 100%;
}
a {
    color: limegreen;
}
`}
        </style>
    </footer>  

);

export default Footer;