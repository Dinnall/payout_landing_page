import Link from 'next/link';
import {loadFirebase} from '../lib/firebase.js';

class Navbar extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        userId: null,
        s: this.props.tab,
    }
        
}
    static async componentDidMount(){
    document.getElementById('header').scrollIntoView();
    this.myRef.current.scrollTo(0, 0);
    let firebase = loadFirebase();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          userId: user.name,  
        })
        }
        else {
        this.setState({
          userId: null,  
        })
      }
    }); 
    }
    onClick = () => {
    let x = document.getElementById("topNav");
    x.classList.toggle("responsive");
    }
    
    render(){

        return(
        
        <div id="header" className="row header">
        <div className="col space"></div>
            <div className="col-xl-8 col-md-10 col-sm-12">
            <div className="row nav-list">
                <div className="col-4">
                <Link href="/">
                        <a className="tryte">
                <img className="logo" src="/static/img/tryte.png"></img>
                <img className="logo word" src="/static/img/logo.png"></img> 
                        </a>
                </Link>
            </div>
            <div className="col-8">
    <a href="javascript:void(0);">
    <span className="icon" onClick={()=>{this.onClick()}}>&#9776;</span>
    </a>
                
                <ul id="topNav" className="navigation">
                        <Link href="/">
                            <a className="anchor">
                            <li>Home</li>
                        </a>
                        </Link>
                        <Link scroll={false} href="/pricing">
                        <a className="anchor">
                            <li>Pricing</li>
                        </a>
                        </Link>
                        <Link href="/microgreens">
                        <a className="anchor">
                            <li>Microgreens?</li>
                        </a>
                        </Link>
                        <Link href="/faq">
                        <a className="anchor">
                            <li>FAQ</li>
                        </a>
                        </Link>
                        <Link href="/contact">
                        <a className="anchor">
                            <li>Contact</li>
                        </a>
                        </Link>
                        <Link href="/signup">
                        <button type="button" className="subscribe btn btn-success">{this.state.userId ?
                        this.state.userId + ", Hi"
                        :
                        "Get Started"}
                            
                        </button>
                        </Link>
                    </ul>
            </div>
            </div>
            </div>
            <div className="col space"></div>
        <style jsx>
        {` 
.subscribe{
    margin-left: 20px;
    margin-bottom: 5px;
}
.header{
    position: sticky;
    left: 0;
    right: 0;
    top: 0px;
    z-index: 1;
    height: 76px;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
}
.logo {
    width: 65px;
    height: 65px;
    margin-top: -2px;
}
.word {
    height: 80px;
    width: 80px;
    margin-left: 8px;
    margin-top: -1px;
}
ul {
    margin-top: 22px;
    list-style-type: none;
    float: right;
    padding: 0px;
}
.nav-list{
    margin: auto;
}
.anchor {
    display: inline-block;
    font-size: 15px;
    padding: 0 9px;
    font-weight: 300;
    color: #000;
    background-color: rgba(0, 0, 0, 0);
    transition: .3s
}
.anchor:hover{
    font-weight: 600;
    text-decoration: none;
}
.icon{
    display: none;
}
@media all and (max-width:900px) {

    .tryte{
    width: 100%;
    position: fixed;
    margin: auto;
    display: block;
    text-align: center;
    left: 0;
    right: 0;
    margin-right: 12px;
}
    .icon,
    .navigation {
        position: absolute
    }
.navigation {
        width: 100%;
        border-bottom: 3px dimgray solid;
        transform: translate(100%, 0);
        transition: all .3s linear;
        background-color: white;
        position: fixed;
        margin-top: 75px!important;
        z-index: 10;
        padding: 0;
        width: 100%;
        right: 0;
    }
.navigation,
    .navigation.responsive,
    .navigation.responsive li {
        display: grid;
        margin: auto
    }
.subscribe{
margin: 0;
border-radius: 0px;
}
    .navigation {
        float: none;
        text-align: center
    }
    .icon{
    display: block;
    font-size: 25px;
    color: limegreen;
    margin-top: 23px;
    right: 0px;
}
    ul a {
        padding: 5px 0
    }

    .navigation.responsive {
        background-color: white;
        position: fixed;
        margin-top: 75px!important;
        transform: translate(0, 0);
        animation: open .3s ease-out;
        z-index: 10;
        padding: 0;
        width: 100%;
        left: 0;
        text-align: center;
        transition: all .3s linear
    }
    @keyframes open {
        0% {
            transform: translate(100%, 0)
        }

        100% {
            transform: translate(0, 0)
        }
    }

    @keyframes close {
        0% {
            transform: translate(0, 0)
        }

        100% {
            transform: translate(100%, 0)
        }
    }
    }
@media all and (max-width:780px) {
   .space{
    display: none;
}
    .icon{
    right: 20px;
    font-size: 22px;
}
}
`}
        </style>
    </div>
        )
    }
}
export default Navbar;