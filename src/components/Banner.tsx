import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={'/img/cover.jpg'}
      alt='cover'
      fill={true}
      priority
      objectFit='cover'/>
      <div className={styles.bannerText}>
        <h1>ระบบจองวัคซีนกลาง</h1>
        <h3>#กันไว้ดีกว่าแก้</h3>
      </div>
    </div>
  )
}