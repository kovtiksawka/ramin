import Image from 'next/image'
import styles from './page.module.scss'
import trainer from '../../public/ramin.webp'
import { Phone } from 'lucide-react'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
        src={trainer}
        alt="Рамин Гасанов — персональный тренер"
        width={trainer.width}
        height={trainer.height}
        className={styles.image}
        priority
        quality={85}
      />
      </div>
      <div className={styles.trainer}>Персональный тренер</div>
       <div className={styles.name}>Рамин Гасанов</div>
       <div className={styles.titlesLabel}>Мастер спорта по:</div>
       <div className={styles.titlesContainer}>
          <span className={styles.titlePill}>Боевое самбо</span>
          <span className={styles.titlePill}>КЕ</span>
          <span className={styles.titlePill}>Рукопашный бой</span>
        </div>

      <div className={styles.description}>
        Опыт тренерской работы более 20 лет. Индивидуальные и групповые тренировки: сила, выносливость, координация, набор массы и снижение веса.
      </div>

      <a href="tel:+79618003464" className={styles.phone}>
        <Phone size={18} className={styles.phoneIcon} />
        <span>+7 (961) 800-34-64</span>
      </a>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>23+</div>
          <div className={styles.statLabel}>года в спорте</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>10+</div>
          <div className={styles.statLabel}>чемпионских титулов</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>50+</div>
          <div className={styles.statLabel}>учеников с результатами</div>
        </div>
      </div>
    </div>
  )
}
