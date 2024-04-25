
import './App.css';
import logo from "../src/asset/logo.png"
import email from "../src/asset/email.png"
import menu from "../src/asset/menu.png"
import share from "../src/asset/share.png"
import magnifier from "../src/asset/magnifier.png"
import insights from "../src/asset/insights.jpg"
import india from "../src/asset/india.png"
import whatsapp from "../src/asset/whatsapp.png"
import ShmStore from "../src/asset/ShmStore.svg"
import facebook from "../src/asset/facebook.png"
import twitter from "../src/asset/twitter.png"
import linkedin from "../src/asset/linkedin.png"
import youtube from "../src/asset/youtube.png"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import SidebarMenu from "./sidebarMenu"
function App() {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handlePrevButtonClick = () => {
    setBackgroundImageIndex(prevIndex => (prevIndex === 0 ? numberOfImages - 1 : prevIndex - 1));
  };

  const handleNextButtonClick = () => {
    setBackgroundImageIndex(prevIndex => (prevIndex === numberOfImages - 1 ? 0 : prevIndex + 1));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const numberOfImages = 3;

  return (
    <>
      <div>

        {isSidebarOpen && <SidebarMenu toggleSidebar={toggleSidebar} />}

      </div>
      <div className="container">
        <div className="first">
          <div class="head">
            <div class="menuHead">
              <img className="menu" src={menu} alt="" onClick={toggleSidebar} />
              <img className="menu" src={email} alt="" />

            </div>
            <img className="logo1" src={logo} alt="" />
            <div class="menuHead">
              <img className="menu" src={magnifier} alt="" />
              <img className="menu" src={share} alt="" />

            </div>

          </div>

          <div className="banner">
            <Carousel selectedItem={backgroundImageIndex} onChange={setBackgroundImageIndex}>
              <div className="banner">

              </div>
              <div className="banner2">

              </div>

            </Carousel>

            <div className="text">
              <div className="textTitle">
                <h3>ANNOUNCEMENTS</h3>
                <div className="admi">
                  <p >Admission are open</p>
                  <p >the academic year 2021-22</p>
                </div>
              </div>
              <div className='arrowStyle'>
                <ArrowCircleLeftIcon fontSize="large" className="arrowIconR" onClick={handlePrevButtonClick} />
                <ArrowCircleRightIcon fontSize="large" className="arrowIconR" onClick={handleNextButtonClick} />
              </div>
              <div class="card">
                <p>Empowering students <br />
                  to create solutions <br />
                  for tomorrow's challenges.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="secound">
          <div className="secTitle">
            <h3 className="secName">INSIGHTS</h3>
            <h1 className="secMar"> <span class="shm-store">SHM Store</span> Marketplace Insights</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>


        <div className="three">
          <div className="threeSec">
            <div>
              <img className="threeImg" src={insights} alt="" />
            </div>
          </div>
          <div className="threeContainer" >
            <div className="three1">
              <div className="text12">
                <h3 className="threeh3">1 OR 7</h3>
                <div className="threetext">
                  <p >we track your vessels to deliver</p>
                  <p >at earliest of call</p>
                </div>
              </div>
              <div class="threeBtn">
                <button> Visit Page</button>
              </div>
            </div>
          </div>
        </div>

        <div className="four">
          <div className="foursec">
            <h3 className="fourName">NETWORK</h3>
            <h1 className="fourMar"> <span class="four-store">SHM Network</span> Capability</h1>
            <p> our extensive network of delivery centres across multiple locations,rnsure fast
            </p>
            <p> and effective service.</p>
          </div>
          <div className="foursec2">
            <div className="fourimg">
              <img className="fourimg1" src={india} alt="" />
            </div>
          </div>
        </div>

        <div className="five">
          <div className="fivehead">
            <h1 className="fivefirsth1">Get Your Products Delivered In</h1>
            <h1 className="fivesech1"> Your Preferred City Or The Next Port Of Call.</h1>
          </div>
          <div className="fivbtn">
            <button > Contact Us <img className="fiveBtnimg" src={whatsapp} alt="" /></button>
          </div>

        </div>

        <div className="six">
          <div className="item">
            <h2>Useful Links</h2>
            <span>Blog</span>
            <span>SHM Store</span>
            <span>Register</span>
          </div>

          <div className="item">
            <h2>Company</h2>

            <span>SHM Group</span>
            <span> SHM Fire Sefety</span>
            <span>SHM Shipcare</span>
            <span>SHM Products</span>
          </div>

          <div className="item">
            <h2>Company</h2>
            <span>+91-222-378-6400</span>
            <span>info@theshmstore.com</span>
            <span> head office BPT. Polt no.51B, magazine<br />
              street,darukhana, mazagaon, mumbai,<br />
              400010
            </span>
          </div>
        </div>

        <div className="sixContain">
          <div className="sixfeil">
            <div className="siximg">
              <img className="siximg1" src={ShmStore} alt="" />
            </div>
            <hr />
            <div className="sixpara">
              <p>We give you complete contol of your</p>
              <p> shipments. Delivered on time</p>
              <p>with no hassle</p>
            </div>

          </div>
          <div className="allimg">
            <img className="allimg1" src={facebook} alt="" />
            <img className="allimg1" src={twitter} alt="" />
            <img className="allimg1" src={linkedin} alt="" />
            <img className="allimg1" src={youtube} alt="" />
          </div>
        </div>

        <div className="seven">
          <div className="sevensec">
            <div className="sevenitem1">
              <h2>Have Questions?</h2>
              <span> Ask Our 24/7 Customer Support Executive</span>
              <h2> Call Us :- +91 1800-3002-7286</h2>
            </div>
            <div className="sevenitem2">
              <h3>Subscribe to our newsletter</h3>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer">
            <div className=" footersec">

              <p> @ 2022 SHM Shipcare. All Rights Reserved. ISO 9001:2008 Certified. Designed by ideamagix</p>

              <div className="footerend">
                <span>Privacy</span>
                <span>Terms & Conditions</span>
                <span> Site Map</span>


              </div>
            </div>

          </div>
        </div>


      </div>

    </>
  );
}

export default App;
