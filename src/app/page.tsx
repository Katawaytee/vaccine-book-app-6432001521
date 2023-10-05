import Image from 'next/image'
import Banner from '@/components/Banner'
import styles from './page.module.css'
import { PromoteCard } from '@/components/PromoteCard'

export default function Home() {
  return (
    <main>
      <Banner/>
      <PromoteCard></PromoteCard>
    </main>
  )
}
