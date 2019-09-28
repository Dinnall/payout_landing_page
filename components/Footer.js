import Link from 'next/link';

const Footer = () => (
  
  <footer className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-3 col-12">
                <ul style={{listStyle: 'none'}} className="contact">
                    <h4>PAYOUT</h4>
                    <hr></hr>
                </ul>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2 col-12">
                <ul style={{listStyle: 'none'}}>
                    <h4>Us</h4>
                    <hr></hr>
                </ul>
            </div>
            <div className="col-lg-2 col-12">
                <ul style={{listStyle: 'none'}}>
                    <h4>Social</h4>
                    <hr></hr>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Get in Touch</a></li>
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