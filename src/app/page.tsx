import Image from 'next/image'
import Banner from '@/components/Banner'
import CardPanel from '@/components/CardPanel'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Banner/>
      <CardPanel/>
    </main>
  )
}
