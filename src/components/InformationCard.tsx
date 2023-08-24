import styles from './informationcard.module.css';
import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image src={'/img/inf1.jpg'}
        alt='Information Picture 1'
        fill={true}
        objectFit='cover'/>
      </div>
      <div className={styles.cardtextheading}>คำถาม</div>
      <div className={styles.cardtext}>ทำไมจึงต้องฉีดวัคซีนไข้หวัดใหญ่ทุกปี</div>
      <div className={styles.cardtextheading}>คำตอบ</div>
      <div className={styles.cardtext}>เชื้อไวรัสไข้หวัดใหญ่ มีการเปลี่ยนแปลงทุกปี</div>
    </div>
  )
}