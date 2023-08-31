import Image from 'next/image'
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
  return(
    <div className='w-full h-[50px] fixed top-0 left-0 right-0 flex flex-row-reverse 
    z-50 bg-slate-100'>
      <Image src={'/img/logo.png'} className='h-full w-auto'
      alt='logo' width={0} height={0} sizes='100vh'/>
      <TopMenuItem title='Booking' pageRef='/booking'/>
    </div>
  );
}