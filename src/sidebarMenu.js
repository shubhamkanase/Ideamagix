import React from 'react';
import facebook from "../src/asset/facebook.png"
import twitter from "../src/asset/twitter.png"
function sidebarMenu({ toggleSidebar }) {
    return (
        <div className="sidebarMenu">
            <div className="sidebarContent">
                <div>
                    <button onClick={toggleSidebar}>Close</button>

                    <div className="flexContent">
                        <div className='flex1'>
                            <h2>Weddings</h2>
                            <h2>Corporate Events</h2>
                            <h2>Activities</h2>
                            <h2>Accomodations</h2>
                            <h2>Occasions</h2>
                        </div>

                        <div className='flex2' >
                            <span>Home</span>
                            <span>About</span>
                            <span>Gallery</span>
                            <span>Facilities</span>
                            <span>Contact</span>
                            <span>FAQs</span>
                            <span>Privacy Policy</span>
                        </div>


                        <div className='flex' >
                            <span>145/3,, Ashirwad Lawns, Auranabad Highway,<br/>
                               opposite Manjula Place, Nandur, Nashik-422003
                            </span>
                            <span>GET DIRECTIONS</span>
                            <span>+91 9823786101</span>
                            <span>info@ashirwadlawns.com</span>
                            <span>sollow Us on</span>
                            <span>    <img className="allimg1" src={facebook} alt="" /></span>
                            <span>  <img className="allimg1" src={twitter} alt="" /></span>
                        </div>


                    </div>

                </div>
            </div>
        </div>

    )
}

export default sidebarMenu