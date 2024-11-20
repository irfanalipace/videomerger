import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { MdOutlinePlayCircleFilled } from 'react-icons/md'
import {VideoDisplay} from '../../assets/images/index'
import { FaPersonRunning } from 'react-icons/fa6'
import { FaFileDownload } from 'react-icons/fa'
import Layer from '../../components/Layer'
import Categories from '../../components/Categories'

const Dashboard = () => {
  return (
    <DefaultLayout>
<div className='flex flex-col items-center justify-center gap-4 py-6 lg:py-0 md:py-0 '>
<p className='text-primary text-xl md:text-4xl lg:text-4xl '>DROPOUT CREATOR</p>
<MdOutlinePlayCircleFilled className='text-primary text-3xl'/>
<img src={VideoDisplay} alt=""  className='h-[350px] w-[350px]'/>
<div className='flex items-center gap-12'>
  <div className='bg-black rounded-full p-3'>

<FaPersonRunning className='text-primary text-2xl'/>
  </div>
  <div className='bg-black rounded-full p-3'>

<FaFileDownload className='text-primary text-2xl'/>
  </div>
</div>
</div>
    </DefaultLayout>
  )
}

export default Dashboard