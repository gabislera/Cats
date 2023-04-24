import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Cats } from '../Assets/cat-curled.svg'
import { UserContext } from '../UserContext'

const Header = () => {
  const { data } = useContext(UserContext)

  return (
    <header className={styles.header}>
      <div className={`${styles.nav} container`}>
        <Link to='/' className={styles.logo} aria-label='Cats - Home'>
          {<Cats />}
        </Link>
        {data ? (<Link to='conta' className={styles.login}>{data.nome}</Link>) :
          <Link to='login' className={styles.login}>Login / Criar</Link>}
      </div>
    </header>
  )
}

export default Header