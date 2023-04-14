import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Cats } from '../Assets/cat-icon.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.nav} container`}>
        <Link to='/' className={styles.logo} aria-label='Dogs - Home'>
          {<Cats />}
        </Link>
        <Link to='login' className={styles.login}>Login / Criar</Link>
      </div>
    </header>
  )
}

export default Header