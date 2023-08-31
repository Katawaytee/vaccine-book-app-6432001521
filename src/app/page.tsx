import Image from 'next/image'
import Banner from '@/components/Banner'
import InformationCard from '@/components/InformationCard'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div className='m-5 flex flex-row content-around justify-center gap-x-32 flex-wrap'>
        <InformationCard HospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg' />
        <InformationCard HospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg' />
        <InformationCard HospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg' />
      </div>
    </main>
  )
}
