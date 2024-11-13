import React, { useEffect } from 'react'
import '../styles/landing.css'
import {PiStudent} from 'react-icons/pi'
import {FaHandHoldingWater} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      navigate("/freelancer")
    } else if (localStorage.getItem("usertype") === 'client'){
      navigate("/client")
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })


  return (
    <div className="landing-page">

        <div className="landing-hero">

            <div className='landing-nav'>
              
              <header>
<img src="https://res.cloudinary.com/dotfoxvju/image/upload/v1730957307/Screenshot_2024-11-07_102615_kylq4m.png" alt="My Website Logo" width="150" height="150" style={{marginTop:"100px"}}/>
    </header>
              <button onClick={()=> navigate('/authenticate')} >Sign In</button>
              
            </div>

            <div className="landing-hero-text">

                <h1>Empower Your Journey: Elevate Your Craft on FlexiHUB</h1>
                <p>Dive into a realm of endless possibilities with FlexiHUB. Unleash your creativity, skills, and passion as you embark on a freelancing journey like never before. Our platform is a thriving marketplace where innovation meets opportunity, connecting talented freelancers with businesses seeking excellence. </p>
                <button onClick={()=> navigate('/authenticate')}>Join Now</button>
            </div>

        </div>

    </div>
  )
}

export default Landing