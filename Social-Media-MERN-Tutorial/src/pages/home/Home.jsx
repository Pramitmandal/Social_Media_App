import React from 'react'
import './Home.css'
import PostSide from '../../components/PostSide/PostSide'
const Home = () => {
  return (
    <div className="Home">
        <div className="profileSide"> Profile </div>
        <PostSide />
        <div className="RightSide"> RightSide </div>
    </div>
  )
}

export default Home