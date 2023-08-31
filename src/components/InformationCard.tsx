import Image from 'next/image';

export default function InformationCard({HospitalName, imgSrc} : {HospitalName:string, imgSrc:string}) {
  return (
    <div className='w-1/6 h-[300px] rounded-lg shadow-lg'>
      <div className='w-full h-[70%] relative rounded-t-lg'>
        <Image src={imgSrc}
        alt='Information Picture 1'
        fill={true}
        className='object-cover rounded-t-lg'/>
      </div>
      <div className='w-full h-[30%] p-[10px]'>{HospitalName}</div>
    </div>
  )
}