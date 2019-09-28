import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <div>
           <section className="pricing section">
                <div className="container">
                    <div className="pricing-inner section-inner">
                        <h2 className="section-title mt-0 text-center">FAQ</h2>
                        <div className="pricing-tables-wrap">
                        </div>
						<div className="pricing-faqs container-sm">
	                        <ul className="accordion">
	                            <li>
	                                <div className="accordion-title">
										<span>WHAT IS A PARTNA, OR SOU-SOU?</span>
										<div className="accordion-icon"></div>
									</div>
	                                <div className="accordion-body">
	                               <p>A sou-sou is an informal rotating savings club. When a group of people create a sou-sou, they each contribute an equal amount of money into a fund. They may pay into the pool weekly, bi-weekly, or monthly, but each month the total fund is paid out to one member of the group. The pool rotates until all members have received their share.</p>
                                   <p>For example, if ten members create a sou-sou together and each member contributes $100 a month, than each month one member will be paid out the sum of $1000. Every ten months, the rotation begins again.</p>
	                                </div>
	                            </li>
	                        </ul>
						</div>
                    </div>
                </div>
            </section>    </div>
  </Layout>
);

export default About;