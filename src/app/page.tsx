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

      <section className={styles.mediaSection}>
        <h2 className={styles.mediaTitle}>Фото и видео тренировок</h2>

        <div className={styles.gallery}>
          <div className={styles.mediaItem}>
            <Image
              src="/photos/1.jpg"
              alt="Рамин Гасанов — тренировка"
              width={400}
              height={300}
              className={styles.mediaImage}
            />
            <div className={styles.mediaOverlay}></div>
          </div>

          <div className={styles.mediaItem}>
            <Image
              src="/photos/2.jpg"
              alt="Рамин Гасанов — тренировка"
              width={400}
              height={300}
              className={styles.mediaImage}
            />
            <div className={styles.mediaOverlay}></div>
          </div>

          <div className={styles.mediaItem}>
            <Image
              src="/photos/3.jpg"
              alt="Рамин Гасанов — тренировка"
              width={400}
              height={300}
              className={styles.mediaImage}
            />
            <div className={styles.mediaOverlay}></div>
          </div>

          <div className={styles.mediaItem}>
            <Image
              src="/photos/4.jpg"
              alt="Рамин Гасанов — тренировка"
              width={400}
              height={300}
              className={styles.mediaImage}
            />
            <div className={styles.mediaOverlay}></div>
          </div>

          <div className={styles.mediaItem}>
            <Image
              src="/photos/5.jpg"
              alt="Рамин Гасанов — тренировка"
              width={400}
              height={300}
              className={styles.mediaImage}
            />
            <div className={styles.mediaOverlay}></div>
          </div>

          <div className={styles.mediaItem}>
            <Image
              src="/photos/6.jpg"
              alt="Рамин Гасанов — тренировка"
              width={400}
              height={300}
              className={styles.mediaImage}
            />
            <div className={styles.mediaOverlay}></div>
          </div>

          <div className={styles.mediaItem}>
            <Image
              src="/photos/7.jpg"
              alt="Рамин Гасанов — тренировка"
              width={400}
              height={300}
              className={styles.mediaImage}
            />
            <div className={styles.mediaOverlay}></div>
          </div>

          <div className={styles.mediaItem}>
            <Image
              src="/photos/8.jpg"
              alt="Рамин Гасанов — тренировка"
              width={400}
              height={300}
              className={styles.mediaImage}
            />
            <div className={styles.mediaOverlay}></div>
          </div>

          <div className={styles.mediaItem}>
            <Image
              src="/photos/9.jpg"
              alt="Рамин Гасанов — тренировка"
              width={400}
              height={300}
              className={styles.mediaImage}
            />
            <div className={styles.mediaOverlay}></div>
          </div>

          <div className={styles.mediaItem}>
            <video controls preload="none" poster="/videos/1-poster.jpg">
              <source src="/videos/1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.mediaItem}>
            <video controls preload="none" poster="/videos/2-poster.jpg">
              <source src="/videos/2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.mediaItem}>
            <video controls preload="none" poster="/videos/3-poster.jpg">
              <source src="/videos/3.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.mediaItem}>
            <video controls preload="none" poster="/videos/4-poster.jpg">
              <source src="/videos/4.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.mediaItem}>
            <video controls preload="none" poster="/videos/5-poster.jpg">
              <source src="/videos/5.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.mediaItem}>
            <video controls preload="none" poster="/videos/6-poster.jpg">
              <source src="/videos/6.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  )
}
