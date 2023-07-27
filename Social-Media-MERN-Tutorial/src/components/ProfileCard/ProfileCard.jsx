import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
const ProfileCard = () => {
  return (
    <div className='ProfileCard'>

        <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
        </div>

        <div className="ProfileName">
            <span>Pramit Ki Maal</span>
            <span>SalesForce Developer</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>7,000</span>
                    <span>Followings</span>
                </div>

                <div className="vl"></div>
                
                <div className="follow">
                    <span>7</span>
                    <span>Followers</span>
                </div>

                <div className="vl"></div>
                
                <div className="follow">
                    <span>3</span>
                    <span>Post</span>
                </div>

            </div>
            <hr />
        </div>

        {/* <span>
                My Profile
        </span> */}

    </div>

    
  )
}

export default ProfileCard