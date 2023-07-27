import React from 'react'

import'./Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import PostSide from '../../components/PostSide/PostSide'

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft/>

      <div className="Profile-center">
        {/* <ProfileCard/> */}
        <PostSide/>
      </div>
      {/* <RightSide/> */}
    </div>
  )
}

export default Profile