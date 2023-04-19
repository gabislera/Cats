import styles from './FeedPhotosItem.module.css'
import React from 'react'

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem