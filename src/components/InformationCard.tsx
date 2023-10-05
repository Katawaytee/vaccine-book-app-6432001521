import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from "@mui/material"

export default function InformationCard({HospitalName, imgSrc, value ,onRating } : {HospitalName:string, imgSrc:string,
  value:number, onRating:Function}) {

  return (
    <InteractiveCard contentName={HospitalName}>
      <div className='w-full h-[70%] relative rounded-t-lg'>
        <Image src={imgSrc}
        alt='Information Picture 1'
        fill={true}
        className='object-cover rounded-t-lg'/>
      </div>
      <div className='w-full h-[20%] p-[10px]'>{HospitalName}</div>
      <Rating value={value} 
      onClick={(e)=>{e.stopPropagation();}}
      onChange={(e,newValue)=>{e.preventDefault(); onRating([HospitalName,newValue]); }}/>
    </InteractiveCard>
  )
}