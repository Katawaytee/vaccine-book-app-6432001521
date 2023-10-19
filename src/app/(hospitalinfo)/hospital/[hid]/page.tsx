import Image from 'next/image';
import getHospital from '@/libs/getHospital';

export default async function HospitalDetailPage({params} : {params: {hid: string}}) {
  
  const hospitalDetail = await getHospital(params.hid);

  /* 
  * Mock Data
  
  const mockHosRepo = new Map();
  mockHosRepo.set("001", {name:"Chulalongkorn Hospital", image:"/img/chula.jpg"});
  mockHosRepo.set("002", {name:"Rajavithi Hospital", image:"/img/rajavithi.jpg"});
  mockHosRepo.set("003", {name:"Thammasat University Hospital", image:"/img/thammasat.jpg"});
  */

  return(
    <main className="text-center p-5">
      <div className="flex flex-row my-5">
        <Image src={hospitalDetail.data.picture}
        alt='Hospital Picture'
        width={0} height={0} sizes='100vw'
        className='rounded-lg w-[30%] bg-black'/>
        
        <div className='text-left mx-5 whitespace-pre-line'>
          <div className='text-xl'>{hospitalDetail.data.name}</div>
          <div className='my-5'></div>
          <div>Address: {hospitalDetail.data.address}</div>
          <div>District: {hospitalDetail.data.district}</div>
          <div>Province: {hospitalDetail.data.province}</div>
          <div>Postal code: {hospitalDetail.data.postalcode}</div>
          <div>Tel: {hospitalDetail.data.tel}</div>
        </div>

      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{hid:'001'},{hid:'002'},{hid:'003'}]
}