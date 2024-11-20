import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { AboutImage } from '../../assets/images'

const About = () => {
  return (
    <DefaultLayout>
      <div className='flex items-center justify-center h-[80vh]'>

    <img src={AboutImage} alt="" />
      </div>
    </DefaultLayout>
  )
}

export default About