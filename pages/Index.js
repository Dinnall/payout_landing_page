import Layout from '../components/Layout';
import Link from 'next/link';

class Index extends React.Component{
    
    render(){
        return(
  <Layout>
    <div className="index">
        
        <img className="border" src="/static/img/border.svg"></img>
        <img className="border second-border" src="/static/img/border.svg"></img>
        <img className="plant" src="/static/img/plant.png"></img>
      <div className="row first">
            <div className="jumbo col-lg-6 col-md-12">
                <h1>Order Super Healthy Microgreens To Your Doorstep!</h1>
                <Link href="/signup">
                <button type="button" className="btn btn-success sub">Get Started, First 25 Customers Only</button>
                </Link>
                <a href="#steps" className="more">Learn More About Us  <i className="fa fa-angle-double-down arrow"></i></a>
            </div>
            <div className="col"></div>
        </div>
        <div id="steps" className="row second">
            <div className="col"></div>
            <div className="col-lg-10 col-12">
            <div className="row">
            <div className="col-12">
                <div className="row steps">
                <div className="col-5 margin">
                    <img className="numbers" src="/static/img/one.png"></img>
                    </div>
                <div className="col-7 step">
                    <h1>Subscribe For <br></br>A Package</h1>
                    <p>We provide fresh & healthy microgreens. Whether you want a healthier option for your family or you're a fitness enthusiast, you'll find the perfect Tryte package!</p>
                    </div>
                </div>
                <div className="row steps ltr">
                <div className="col-7 step">
                    <h1>Let Us Do <br></br>The Magic</h1>
                    <p>We farm microgreens personalized for you! Farmed in Tryte's urban farms, we provide the most delicious and healthy types from Radish, Sunflower.</p>
                  </div>
                    <div className="col-5 margin">
                    <img className="numbers" src="/static/img/two.png"></img>
                    </div>
                </div>
                <div className="row steps">
                <div className="col-5 margin three">
                    <img className="numbers" src="/static/img/three.png"></img>
                    </div>
                <div className="col-7 step">
                    <h1>Delivered,<br></br>Just For You</h1>
                    <p>Every week, we harvest and deliver your microgreens from our urban farm directly to your doorstep for free. You can eat it raw or include it with a delicious meal!</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col"></div>
        </div>
        <div className="row">
        <div className="col-12 def">
        <h1>Microgreens?</h1>
        <h5>Microgreens are young greens that are harvested after few leaves are developed. They're packed with intense nutritioun & flavour. Try it now!</h5>
        </div>
        </div>
        <div className="row">
        <div className="col-12">
        <div class="square">
            <div className="row">
                <h2>What You Get With Tryte:</h2>
            <div className="col-4 sec">
                <div className="row">
                <div className="col-lg-3 col-md-12">
                <img src="/static/img/fresh.png"></img>
                    </div>
                <div className="col-lg-9 col-md-12 features">
                    <div className="row">
                    <div className="col-12">
                        <h3>Fresh Microgreens</h3>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <p>You get super microgreens directly from the farm</p>
                        </div>
                    </div>
                    </div>
                    </div>
                
                
                </div>
            <div className="col-4 sec">
                <div className="row">
                <div className="col-lg-3 col-md-12">
                <img src="/static/img/recipe.png"></img>
                    </div>
                <div className="col-lg-9 col-md-12 features">
                    <div className="row">
                    <div className="col-12">
                        <h3>Unique Recipe</h3>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <p>You receive special recipes to enjoy microgreens!</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            <div className="col-4 sec">
                <div className="row">
                <div className="col-lg-3 col-md-12">
                <img src="/static/img/visit.png"></img>
                    </div>
                <div className="col-lg-9 col-md-12 features">
                    <div className="row">
                    <div className="col-12">
                        <h3>Special Visit</h3>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <p>You get a free monthly visit to our farm to learn more</p>
                        </div>
                    </div>
                    </div>
                    </div>
                
                
                </div>    
            </div>
        </div>
        <h4>Starting From <b>RM 25</b> / Month</h4>
        <Link href="/signup">
        <button type="button" className="plan btn btn-success">Choose Your Plan</button>
        </Link>
        </div>
        </div>
        <div className="row third">
        <div className="col-5 cir">
                <div className="circle"></div>    
        </div>
        <div className="col-7 block">
            <div>
            <h1>What's Tryte?</h1>
            <hr></hr>
            <h2>Tryte brings farms to the city! We grow food on rooftops and sell it to healthy people in cities.</h2>
            <h2>We aim to employ unemployed youth in cities through urban agriculture. We help them alleviate their quality of life by providing an extra source of income while producing fresh, delicious food for the neighborhood!</h2>
            </div>
        </div>
        </div>
    </div>
    
  </Layout>
            )
    
}}


export default Index;