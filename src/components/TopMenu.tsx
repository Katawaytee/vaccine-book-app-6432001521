import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return(
    <div className='w-full h-[50px] fixed top-0 left-0 right-0 flex flex-row-reverse 
    z-50 bg-slate-100'>
      <Image src={'/img/logo.png'} className='h-full w-auto'
      alt='logo' width={0} height={0} sizes='100vh'/>
      <TopMenuItem title='Booking' pageRef='/booking'/>
      <TopMenuItem className='absolute left-[100px] py-4' title='My Booking' pageRef='/mybooking'/>

      {/* {
        session?  <Link href="/api/auth/signout">
                    <div className='flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm'>Sign-Out</div>
                  </Link>
                  :<Link href="/api/auth/signin">
                    <div className='flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm'>Sign-In</div>
                  </Link>
      } */}

      {
        session?  <TopMenuItem className='absolute left-0 py-4 text-red-600' title='Sign-Out' pageRef='/api/auth/signout'/>
                  :<TopMenuItem className='absolute left-0 py-4 text-blue-600' title='Sign-In' pageRef='/api/auth/signin'/>
      }

    </div>
  );
}