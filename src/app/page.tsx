import Image from 'next/image'
import styles from './page.module.scss'
import trainer from '../../public/ramin.webp'
import { Phone } from 'lucide-react'
import { Gallery } from './components/Gallery';

export default function Home() {
  const awardsData = [
    {
    category: "Международные турниры",
    items: [
       "Двухкратный призер международного турнира 'Восток-Запад' по профессиональному боевому самбо",
      "Двухкртаный призер международного турнира на призы ОДКБ"
    ]
  },
  {
    category: "Чемпионаты России",
    items: [
      "Двухкратный призер Кубка России по КЕ",
      "Чемпион Всероссийского турнира памяти Васильева по боевому самбо",
      "Чемпион Всероссийского турнира памяти Рябухина по рукомашному бою",
    ]
  },
  {
    category: "Региональные чемпионаты",
    items: [
      "Чемпион Северо-Запада по боевому самбо",
      "Чемпион Санкт-Петербурга и Ленинградской области по боевому самбо",
      "Серебряный призер Санкт-Петербурга и Ленинградской области по рукопашному бою",
      "Чемпион Кубка Санкт-Петербурга и Ленинградской области по панкратиону",
      "Серебряный призер чемпионата Санкт-Петербурга по спортивному самбо",
      "Серебряный призер республики Татарстан по боевому самбо"
    ]
  },
];

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
        Более 20 лет тренерского опыта. Индивидуальные и групповые тренировки по рукопашному бою, боевому самбо, боксу, кикбоксингу и ОФП. Помогаю развить силу, выносливость, координацию и добиться желаемой формы — от функциональной подготовки до боевой эффективности.
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

      
    <section className={styles.awardsSection}>
  <h2 className={styles.awardsTitle}>🏆 Награды и достижения</h2>
  
  <div className={styles.awardsGrid}>
    {awardsData.map((group, i) => (
      <div key={i} className={styles.awardCard}>
        <div className={styles.awardHeader}>
          <span className={styles.awardIcon}>🥇</span>
          <h3 className={styles.awardCategory}>{group.category}</h3>
        </div>
        <ul className={styles.awardList}>
          {group.items.map((item, idx) => (
            <li key={idx} className={styles.awardItem}>
              <span className={styles.bullet}></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

      <Gallery />
    </div>
  )
}
