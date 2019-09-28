import Layout from '../components/Layout';
import Link from 'next/link';

class Index extends React.Component{
    
    render(){
        return(
  <Layout>
    <div className="index">
        
        <img className="border" src="/static/img/border.svg"></img>
        <img className="border second-border" src="/static/img/border.svg"></img>
        <img  className="plant"  src={'https://cdn.dribbble.com/users/2879528/screenshots/6660045/ce6ba1fa-adde-41b7-905f-c419f60b20d3_4x.png'}/>
      <div className="row first">
            <div className="jumbo col-lg-6 col-md-12">
                <h1>A MODERN SOCIAL WAY TO SAVE</h1>
                            <p>Going by various names around the world; <i>Sou-sou</i>,<i>Partna</i>, <i>Tanda</i>.
             PAYOUT is the modern way to save money for the expected and upexpected.</p>
                <h4>We're Launching PAYOUT soon. </h4>
                <Link href="/signup">
                <button type="button" className="btn btn-success sub">Be on the lookout</button>
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
                    <h1>Modern version of traditional <br></br>sou-sou</h1>
                    <p>Save for the expected and unexpected.</p>
                    <p>A sou-sou is an informal rotating savings club. When a group of people create a sou-sou, they each contribute an equal amount of money into a fund. They may pay into the pool weekly, bi-weekly, or monthly, but each month the total fund is paid out to one member of the group. The pool rotates until all members have received their share.</p>
                    </div>
                </div>
                <div className="row steps ltr">
                <div className="col-7 step">
                    <h1>Whats new?</h1>
                    <p>No need to handle physical money.We take on the resposibility as the treasury.</p><br></br>
                    <ol>
                    <li>Transfer money to your bank within minutes</li>
                    <li>Create multiple groups</li>
                    <li>Invest a portion of your saving</li>
                    </ol>
                  </div>
                    <div className="col-5 margin">
                    <img className="numbers" src="/static/img/two.png"></img>
                    </div>
                </div>
                <div className="row steps">
                </div>
                </div>
            </div>
            </div>
            <div className="col"></div>
        </div>
        </div>
    
  </Layout>
    )
    
}}


export default Index;