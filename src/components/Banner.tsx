'use client'
import {useState} from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'

export default function Banner() {
  const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg'];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const {data:session} = useSession();
  console.log(session)
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

      {
        session? <div className='z-30 absolute top-5 right-10 font-semiboldtext-cyan-800 text-xl'>
          {session.user?.name}
        </div>:null
      }

      <button className='bg-white text-cyan-600 border-cyan-600
      font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-5
      hover:bg-cyan-600 hover:text-white hover:border-transparent'
      onClick={(e)=>{ e.stopPropagation(); router.push('/hospital'); }}>
        Select Hospital
      </button>
    </div>
  )
}