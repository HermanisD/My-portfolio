import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/hermanis-djomkins-550a0130/' target="_blank"><BsLinkedin/></a>
        <a href='https://www.facebook.com/hermanis.djomkins/' target="_blank"><FaFacebookSquare></FaFacebookSquare></a>
        <a href='https://github.com/HermanisD' target="_blank"><FaGithub/></a>

    </div>
  )
}

export default HeaderSocial