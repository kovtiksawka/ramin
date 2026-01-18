"use client"

import { useState } from 'react';
import styles from '../page.module.scss'
import Image from 'next/image'

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };


   return (
     <section className={styles.mediaSection}>
        <h2 className={styles.mediaTitle}>Фото и видео тренировок</h2>

         <div className={styles.galleryGrid}>
    {Array.from({ length: 24 }, (_, i) => (
      <div
        key={`photo-${i}`}
        className={`${styles.galleryItem} ${i % 7 === 0 ? styles.large : ''}`}
        onClick={() => handleImageClick(`/photos/${i + 1}.jpg`)}
      >
        <Image
          src={`/photos/${i + 1}.jpg`}
          alt={`Рамин Гасанов — тренировка ${i + 1}`}
          width={400}
          height={300}
          className={styles.galleryImage}
        />
      </div>
    ))}

    {[1, 2, 3, 4, 5, 6].map((num) => (
      <div key={`video-${num}`} className={`${styles.galleryItem} ${styles.videoItem}`}>
        <video
          controls
          preload="none"
          poster={`/videos/${num}-poster.jpg`}
          className={styles.galleryVideo}
        >
          <source src={`/videos/${num}.mp4`} type="video/mp4" />
        </video>
      </div>
    ))}
  </div>

   {selectedImage && (
  <div className={styles.lightbox} onClick={handleClose}>
    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
      <Image
        src={selectedImage}
        alt="Полноразмерное фото"
        width={1600} 
        height={1000}
        className={styles.lightboxImage}
      />
      <button className={styles.closeButton} onClick={handleClose}>
        ×
      </button>
    </div>
  </div>
)}
      </section>
   )
}