'use client'
import {useState} from 'react';
import Image from 'next/image'

export default function Banner() {
  const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg'];
  const [index, setIndex] = useState(0);
  return (
    <div className='block p-1 m-0 w-screen h-[80vh] relative' onClick={()=>{setIndex(index+1)}}>
      <Image src={covers[index%4]}
      alt='cover'
      fill={true}
      priority
      objectFit='cover'/>
      <div className='relative -translate-x-2/4 z-20 text-center w-[30%] text-[26px] 
      text-[rgb(34,12,162)] left-2/4 top-[100px] bg-white/80'>
        <h1 className='font-[Kanit] text-5xl font-bold'>ระบบจองวัคซีนกลาง</h1>
        <h3 className='font-[Kanit] text-3xl font-bold text-black'>#กันไว้ดีกว่าแก้</h3>
      </div>
    </div>
  )
}