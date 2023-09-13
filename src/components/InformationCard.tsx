import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function InformationCard({HospitalName, imgSrc} : {HospitalName:string, imgSrc:string}) {
  return (
    <InteractiveCard contentName={HospitalName}>
      <div className='w-full h-[70%] relative rounded-t-lg'>
        <Image src={imgSrc}
        alt='Information Picture 1'
        fill={true}
        className='object-cover rounded-t-lg'/>
      </div>
      <div className='w-full h-[30%] p-[10px]'>{HospitalName}</div>
    </InteractiveCard>
  )
}