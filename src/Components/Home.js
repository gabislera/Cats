import React from 'react'
import Feed from './Feed/Feed'
import Head from './Helper/Head'

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title='Fotos' description='Home do site Cats, com o feed fotos' />
      <Feed />
    </section>
  )
}

export default Home