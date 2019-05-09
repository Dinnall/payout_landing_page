import Layout from '../components/Layout';
import Link from 'next/link';

class Pricing extends React.Component{

    render(){
        
return(
    
  <Layout>
    <div className="plan-page">
      <div className="row">
        <div className="col-12">
            <div className="row centered">
                <div className="col-1"></div>
                <div className="col-lg-3 col-10 plans">
                <img className="plan-img green" src="/static/img/indie.png"></img>
                    <div className="content">
                    <h1>Indie Green</h1>
                    <p>This is for individuals who want to boost their health and enjoy a a set of delicious microgreens!</p>
                    <ul>
                    <li>30g Kale</li>
                    <li>10g Radish</li>
                    <li>15g Sunflower</li>
                    <li>30g Pok Choi</li>
                    </ul>
                    <h4>Serving for 1 person</h4>
                    <h1 className="price">RM 20 / Week</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-10 plans">
                    <img className="plan-img green" src="/static/img/family.png"></img>
                    <div className="content">
                    <h1>Family Boost</h1>
                    <p>Your children don't eat veggies? Want to add a superfood to family dishes? This plan is for you!</p>
                    <ul>
                    <li>30g Kale</li>
                    <li>10g Radish</li>
                    <li>15g Sunflower</li>
                    <li>30g Tomato</li>
                    </ul>
                    <h4>Serving for 3 people</h4>
                    <h1 className="price">RM 70 / Week</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-10 plans">
            <img className="plan-img" src="/static/img/gym.png"></img>
                    <div className="content">
                    <h1>Gymmer</h1>
                    <p>If you're a fitness person and want to add a pack of super vitamins to your routine, try this plan!</p>
                    <ul>
                    <li>30g Kale</li>
                    <li>10g Radish</li>
                    <li>15g Sunflower</li>
                    <li>30g Tomato</li>
                    </ul>
                    <h4>Serving for 1 person</h4>
                    <h1 className="price">RM 30 / Week</h1>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
        </div>
        <Link href="/signup">
        <button type="button" className="plan btn btn-success">Choose Your Plan</button>
        </Link>
    </div>
  </Layout>
)};
    }

export default Pricing;